
import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.join(__dirname, 'dist');
const TARGET_FILE = path.join(DIST_DIR, 'index.html');
const PORT = 4173;

async function prerender() {
    console.log('🚀 Starting pre-rendering process...');

    if (!fs.existsSync(DIST_DIR)) {
        console.error('❌ dist directory not found. Run "npm run build" first.');
        process.exit(1);
    }

    // Start Vite Preview server
    console.log('🔌 Starting preview server...');
    const server = spawn('npm', ['run', 'preview', '--', '--port', PORT.toString()], {
        shell: true,
        stdio: 'pipe'
    });

    let serverOutput = '';
    server.stdout.on('data', (data) => {
        const str = data.toString();
        serverOutput += str;
        // console.log(str); // Uncomment for debug
    });

    // Wait for server to be ready
    const waitForServer = async () => {
        for (let i = 0; i < 30; i++) {
            if (serverOutput.includes('Local:') || serverOutput.includes('localhost')) {
                return true;
            }
            await new Promise(r => setTimeout(r, 500));
        }
        return false;
    };

    if (!await waitForServer()) {
        console.log('⚠️ Server start not detected in stdout, waiting extra time...');
        await new Promise(r => setTimeout(r, 2000));
    } else {
        console.log('✅ Server detected.');
    }

    // Launch Puppeteer
    console.log('BROWSER: Launching...');
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    try {
        const page = await browser.newPage();

        // Set viewport to standard desktop
        await page.setViewport({ width: 1280, height: 800 });

        console.log(`🌐 Navigating to http://localhost:${PORT}...`);

        // Go to page
        await page.goto(`http://localhost:${PORT}`, {
            waitUntil: 'networkidle0', // Wait for all network requests to finish
            timeout: 30000
        });

        // Ensure Hero is visible (wait for hydration)
        console.log('⏳ Waiting for hydration...');
        try {
            await page.waitForSelector('h1', { timeout: 5000 });
        } catch (e) {
            console.warn('⚠️ H1 not found within 5s, proceeding anyway...');
        }

        // Small extra delay for animations
        await new Promise(r => setTimeout(r, 1000));

        // Get content
        const html = await page.content();

        // Write to file
        fs.writeFileSync(TARGET_FILE, html);
        console.log(`✅ Pre-rendered index.html saved to ${TARGET_FILE}`);
        console.log(`📄 Total size: ${(html.length / 1024).toFixed(2)} KB`);

    } catch (error) {
        console.error('❌ Error during pre-rendering:', error);
        process.exit(1);
    } finally {
        await browser.close();

        // Kill server tree (shell spawn needs care)
        // On Mac/Linux, standard kill might work if not detached.
        server.kill();

        // Force exit to ensure process doesn't hang
        process.exit(0);
    }
}

prerender();
