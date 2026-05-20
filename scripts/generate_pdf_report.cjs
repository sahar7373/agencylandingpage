/**
 * Generate the YTP SEO report PDF via Playwright.
 * Run: NODE_PATH=/Users/lllitadmin/.npm-global/lib/node_modules node scripts/generate_pdf_report.js
 *
 * WHY: Chrome's print dialog defaults to printBackground:false, which strips all CSS
 * background colors/gradients and breaks gradient-text (webkit-text-fill-color:transparent
 * becomes invisible on white). This script uses Playwright with printBackground:true
 * and waits for fonts to load before generating.
 */

const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 794, height: 1123 },  // A4 at 96dpi
  });
  const page = await context.newPage();

  const htmlPath = path.resolve(__dirname, '../reports/ytp_branded_seo_report_pdf.html');
  const outputPath = path.resolve(__dirname, '../reports/Premium SEO Health Check - YourTradePartner.pdf');

  console.log('Loading HTML...');
  await page.goto('file://' + htmlPath, { waitUntil: 'networkidle' });

  // Wait for Google Fonts to finish loading (up to 8s)
  await page.evaluate(() =>
    document.fonts.ready.then(() => Promise.resolve())
  );
  await page.waitForTimeout(1500);

  console.log('Generating PDF...');
  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,   // <-- critical: prints all CSS backgrounds + gradients
    preferCSSPageSize: true,  // respects @page { size } from CSS
    margin: { top: '0', bottom: '0', left: '0', right: '0' },
    displayHeaderFooter: false, // no Chrome date/URL headers
  });

  console.log(`PDF saved to: ${outputPath}`);
  await browser.close();
})();
