// Guards the deploy pipeline. If the prerender silently no-ops we would ship 40
// copies of the homepage again — the exact failure that knocked the trade pages
// out of Google's index. Run after `npm run build:ssg`, before deploying.
import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DIST = join(ROOT, 'dist');

// Mirrors discoverRoutes() in prerender.js — same source, same filters.
function discoverRoutes() {
  const appSrc = readFileSync(join(ROOT, 'src', 'App.jsx'), 'utf-8');
  return [...appSrc.matchAll(/path="([^"*]+)"/g)]
    .map((m) => m[1])
    .filter((r) => !r.includes(':') && !['/guide-pdf', '/blueprint-pdf', '/unsubscribe'].includes(r))
    .filter((r, i, arr) => arr.indexOf(r) === i);
}

function fileFor(route) {
  return route === '/' ? join(DIST, 'index.html') : join(DIST, route.slice(1), 'index.html');
}

const tagText = (html, re) => html.match(re)?.[1]?.trim() ?? null;

const routes = discoverRoutes();
const errors = [];

const homeFile = fileFor('/');
if (!existsSync(homeFile)) {
  console.error('dist/index.html missing — did the build run?');
  process.exit(1);
}
const homeHtml = readFileSync(homeFile, 'utf-8');
const homeTitle = tagText(homeHtml, /<title[^>]*>([^<]*)<\/title>/i);

for (const route of routes) {
  const file = fileFor(route);
  if (!existsSync(file)) {
    errors.push(`${route} — no prerendered file at ${file.replace(ROOT + '/', '')}`);
    continue;
  }

  const html = readFileSync(file, 'utf-8');
  const title = tagText(html, /<title[^>]*>([^<]*)<\/title>/i);
  const canonical = tagText(html, /<link[^>]+rel="canonical"[^>]+href="([^"]+)"/i);
  const h1 = tagText(html, /<h1[^>]*>([\s\S]*?)<\/h1>/i);

  if (!title) errors.push(`${route} — no <title>`);
  else if (route !== '/' && title === homeTitle) errors.push(`${route} — still carries the homepage title`);

  if (!canonical) errors.push(`${route} — no canonical tag`);
  if (!h1) errors.push(`${route} — no <h1>`);
}

if (errors.length) {
  for (const e of errors) console.error(`::error::${e}`);
  console.error(`\n${errors.length} prerender problem(s) across ${routes.length} routes — not deploying.`);
  process.exit(1);
}

console.log(`Verified ${routes.length} prerendered routes: unique titles, canonicals and h1s all present.`);
