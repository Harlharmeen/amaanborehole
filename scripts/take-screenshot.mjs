import { chromium } from "playwright";

async function run() {
  let browser;
  try {
    browser = await chromium.launch({ headless: true });
  } catch {
    browser = await chromium.launch({ channel: "msedge", headless: true });
  }

  const context = await browser.newContext();
  const page = await context.newPage();

  // Desktop header
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  await page.locator("header").screenshot({ path: "public/header-preview.png" });

  // Desktop footer
  await page.locator("footer").screenshot({ path: "public/footer-preview.png" });

  // Mobile header
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  await page.locator("header").screenshot({ path: "public/header-mobile-preview.png" });

  await browser.close();
  console.log("Screenshots captured successfully!");
}

run();
