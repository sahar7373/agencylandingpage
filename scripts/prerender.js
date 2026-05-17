import puppeteer from 'puppeteer';
import { spawn } from 'child_process';
import { writeFileSync, mkdirSync, readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST_DIR = join(__dirname, '..', 'dist');
const PORT = 4173;
const BASE_URL = `http://localhost:${PORT}`;

// Routes are discovered automatically from App.jsx — no manual list to maintain.
// When you add a new <Route path="..." /> to App.jsx, it is prerendered on the
// next build:ssg run without any changes to this file.
function discoverRoutes() {
  const appSrc = readFileSync(join(__dirname, '..', 'src', 'App.jsx'), 'utf-8');
  const matches = [...appSrc.matchAll(/path="([^"*]+)"/g)];
  const routes = matches
    .map((m) => m[1])
    // Drop routes with dynamic segments or that don't need prerendering
    .filter((r) => !r.includes(':') && r !== '/guide-pdf' && r !== '/blueprint-pdf' && r !== '/unsubscribe')
    // Deduplicate
    .filter((r, i, arr) => arr.indexOf(r) === i);
  return routes;
}

const ROUTES = discoverRoutes();

function startServer() {
  return new Promise((resolve) => {
    const server = spawn('npx', ['vite', 'preview', '--port', String(PORT)], {
      cwd: join(__dirname, '..'),
      stdio: ['ignore', 'pipe', 'pipe'],
    });

    let resolved = false;
    const tryResolve = () => {
      if (!resolved) {
        resolved = true;
        resolve(server);
      }
    };

    server.stdout.on('data', (data) => {
      const text = data.toString();
      process.stdout.write(text);
      if (text.includes('localhost')) tryResolve();
    });

    server.stderr.on('data', (data) => process.stderr.write(data));

    // Fallback: resolve after 5 seconds regardless
    setTimeout(tryResolve, 5000);
  });
}

function routeToOutputPath(route) {
  if (route === '/') return join(DIST_DIR, 'index.html');
  return join(DIST_DIR, route.replace(/^\//, ''), 'index.html');
}

async function prerenderRoute(page, route) {
  process.stdout.write(`  ${route} ...`);

  await page.goto(`${BASE_URL}${route}`, {
    waitUntil: 'networkidle0',
    timeout: 30000,
  });

  // Wait for React to mount content into #root
  await page.waitForFunction(
    () => (document.querySelector('#root')?.children.length ?? 0) > 0,
    { timeout: 15000 }
  );

  // Give react-helmet-async time to flush head tag updates into the DOM
  await new Promise((r) => setTimeout(r, 400));

  const html = await page.evaluate(
    () => '<!DOCTYPE html>\n' + document.documentElement.outerHTML
  );

  const outPath = routeToOutputPath(route);
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, html, 'utf-8');

  console.log(` ${(html.length / 1024).toFixed(1)} KB`);
}

async function main() {
  console.log('Starting vite preview server...');
  const server = await startServer();

  // Small buffer to ensure the server is fully listening
  await new Promise((r) => setTimeout(r, 1000));

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    const page = await browser.newPage();

    // Block analytics and tracking — prevents slow 3rd-party timeouts
    await page.setRequestInterception(true);
    page.on('request', (req) => {
      const url = req.url();
      if (
        url.includes('google-analytics.com') ||
        url.includes('googletagmanager.com') ||
        url.includes('facebook.net') ||
        url.includes('connect.facebook.net')
      ) {
        req.abort();
      } else {
        req.continue();
      }
    });

    console.log(`\nPrerendering ${ROUTES.length} routes into ${DIST_DIR}:\n`);

    for (const route of ROUTES) {
      await prerenderRoute(page, route);
    }

    console.log(`\nPrerender complete — ${ROUTES.length} static HTML files written.`);
    console.log('Deploy the dist/ folder as usual.\n');
  } finally {
    await browser.close();
    server.kill('SIGTERM');
  }
}

main().catch((err) => {
  console.error('\nPrerender failed:', err.message);
  process.exit(1);
});
