import puppeteer from 'puppeteer-core';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function capture() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  console.log('Navigating to http://127.0.0.1:3000/...');
  await page.goto('http://127.0.0.1:3000/', { waitUntil: 'networkidle0' });

  // 1. Desktop full page
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await delay(800); // wait for entrance animation
  await page.screenshot({ path: path.join(__dirname, '../desktop-hero.png'), fullPage: false });
  console.log('Saved desktop-hero.png');

  // Full page scroll screenshot to verify Bento, Projects, Skills, Journey, Contact
  await page.screenshot({ path: path.join(__dirname, '../desktop-fullpage.png'), fullPage: true });
  console.log('Saved desktop-fullpage.png');

  // 2. Mobile viewport
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true, deviceScaleFactor: 2 });
  await delay(800);
  await page.screenshot({ path: path.join(__dirname, '../mobile-hero.png'), fullPage: false });
  console.log('Saved mobile-hero.png');

  // 3. Test opening the modal
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('button'));
    const modalBtn = buttons.find(b => b.textContent && b.textContent.includes('Deep-Dive Case Study'));
    if (modalBtn) modalBtn.click();
  });
  await delay(600);
  await page.screenshot({ path: path.join(__dirname, '../modal-preview.png'), fullPage: false });
  console.log('Saved modal-preview.png');

  await browser.close();
  console.log('All previews captured successfully.');
}

capture().catch(err => {
  console.error('Fatal capture error:', err);
  process.exit(1);
});
