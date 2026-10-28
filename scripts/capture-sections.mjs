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
  await delay(800);

  const sections = ['projects', 'skills', 'journey', 'contact'];

  for (const id of sections) {
    const el = await page.$(`#${id}`);
    if (el) {
      await el.scrollIntoView();
      await delay(300);
      // Scroll through the section to trigger any whileInView animations
      await page.evaluate(async (elementId) => {
        const section = document.getElementById(elementId);
        if (section) {
          const rect = section.getBoundingClientRect();
          const top = window.scrollY + rect.top;
          const height = rect.height;
          for (let y = top; y < top + height; y += 400) {
            window.scrollTo(0, y);
            await new Promise(r => setTimeout(r, 100));
          }
        }
      }, id);
      await delay(600);
      await el.screenshot({ path: path.join(__dirname, `../section-${id}.png`) });
      console.log(`Captured section-${id}.png`);
    }
  }

  await browser.close();
}

captureSections().catch(console.error);
