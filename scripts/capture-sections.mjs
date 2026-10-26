import puppeteer from 'puppeteer-core';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function captureSections() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 950, deviceScaleFactor: 1.5 });
  await page.goto('http://127.0.0.1:3000/', { waitUntil: 'networkidle0' });
  await delay(600);

  const sections = ['about', 'projects', 'skills', 'journey', 'contact'];

  for (const id of sections) {
    const el = await page.$(`#${id}`);
    if (el) {
      await el.scrollIntoView();
      await delay(500); // allow scroll reveal animation
      await el.screenshot({ path: path.join(__dirname, `../section-${id}.png`) });
      console.log(`Captured section-${id}.png`);
    }
  }

  const firstProject = await page.$('.space-y-12 > div:first-child');
  if (firstProject) {
    await firstProject.screenshot({ path: path.join(__dirname, '../card1-verify.png') });
    console.log('Captured card1-verify.png');
  }

  await browser.close();
}

captureSections().catch(console.error);
