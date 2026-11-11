import { chromium } from "playwright";

const viewports = [
  { name: "Desktop (1440px)", width: 1440, height: 900 },
  { name: "Laptop (1280px)", width: 1280, height: 800 },
  { name: "Tablet (768px)", width: 768, height: 1024 },
  { name: "Mobile (390px)", width: 390, height: 844 },
  { name: "Narrow Mobile (360px)", width: 360, height: 740 },
];

const testRoutes = [
  "/",
  "/about",
  "/services",
  "/services/borehole-drilling",
  "/projects",
  "/blog",
  "/contact",
];

async function run() {
  console.log("=== STARTING RESPONSIVE LAYOUT VERIFICATION ===\n");
  let browser;
  try {
    browser = await chromium.launch({ headless: true });
  } catch (err) {
    console.log("Standard Chromium not available, trying system msedge / chrome channel...");
    try {
      browser = await chromium.launch({ channel: "msedge", headless: true });
    } catch (err2) {
      try {
        browser = await chromium.launch({ channel: "chrome", headless: true });
      } catch (err3) {
        console.error("Could not launch browser:", err3.message);
        process.exit(1);
      }
    }
  }

  const context = await browser.newContext();
  const page = await context.newPage();

  let hasOverflowErrors = false;

  for (const vp of viewports) {
    console.log(`\nTesting Viewport: ${vp.name}`);
    await page.setViewportSize({ width: vp.width, height: vp.height });

    for (const route of testRoutes) {
      await page.goto(`http://localhost:3000${route}`, { waitUntil: "networkidle" });

      // Check for horizontal overflow
      const overflow = await page.evaluate(() => {
        const docWidth = document.documentElement.offsetWidth;
        const scrollWidth = document.documentElement.scrollWidth;
        const bodyScrollWidth = document.body.scrollWidth;
        const maxScroll = Math.max(scrollWidth, bodyScrollWidth);
        const hasOverflow = maxScroll > window.innerWidth;
        return {
          windowInnerWidth: window.innerWidth,
          scrollWidth: maxScroll,
          hasOverflow,
          diff: maxScroll - window.innerWidth,
        };
      });

      if (overflow.hasOverflow) {
        console.log(`  ✖ OVERFLOW DETECTED on ${route}: width=${overflow.windowInnerWidth}px, scrollWidth=${overflow.scrollWidth}px (overflow: +${overflow.diff}px)`);
        hasOverflowErrors = true;
      } else {
        console.log(`  ✔ [${vp.width}px] ${route.padEnd(28)} No horizontal overflow`);
      }
    }
  }

  // Interactive Mobile Menu Test at 390px
  console.log("\nTesting Mobile Navigation Interaction at 390px...");
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });

  const menuButton = page.locator('button[aria-label="Open menu"]');
  const isMenuButtonVisible = await menuButton.isVisible();
  console.log(`  Mobile Menu Button visible: ${isMenuButtonVisible ? "✔ YES" : "✖ NO"}`);

  if (isMenuButtonVisible) {
    await menuButton.click();
    await page.waitForTimeout(300);
    const mobileNav = page.locator('nav[aria-label="Mobile Navigation"]');
    const isNavOpen = await mobileNav.isVisible();
    console.log(`  Mobile Menu Drawer opened on click: ${isNavOpen ? "✔ YES" : "✖ NO"}`);

    const closeButton = page.locator('button[aria-label="Close menu"]');
    await closeButton.click();
    await page.waitForTimeout(300);
    const isNavClosed = !(await mobileNav.isVisible());
    console.log(`  Mobile Menu Drawer closed on toggle: ${isNavClosed ? "✔ YES" : "✖ NO"}`);
  }

  // Desktop Menu Link Visibility at 1440px
  console.log("\nTesting Desktop Navigation Visibility at 1440px...");
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  const desktopNav = page.locator('nav[aria-label="Main Navigation"]');
  const isDesktopNavVisible = await desktopNav.isVisible();
  console.log(`  Desktop Navigation visible: ${isDesktopNavVisible ? "✔ YES" : "✖ NO"}`);

  await browser.close();

  console.log("\n==========================================");
  if (!hasOverflowErrors) {
    console.log("RESPONSIVE VERIFICATION COMPLETE: ALL WIDTHS ZERO OVERFLOW!");
  } else {
    console.log("RESPONSIVE ISSUES DETECTED!");
    process.exit(1);
  }
}

run();
