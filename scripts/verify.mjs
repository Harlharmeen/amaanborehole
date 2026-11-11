import http from "http";

const routes = [
  { path: "/", expectedStatus: 200, name: "Home" },
  { path: "/about", expectedStatus: 200, name: "About" },
  { path: "/services", expectedStatus: 200, name: "Services Overview" },
  { path: "/services/borehole-drilling", expectedStatus: 200, name: "Service: Borehole Drilling" },
  { path: "/services/geotechnical-investigation", expectedStatus: 200, name: "Service: Geotechnical" },
  { path: "/services/site-investigation", expectedStatus: 200, name: "Service: Site Investigation" },
  { path: "/services/water-solutions", expectedStatus: 200, name: "Service: Water Solutions" },
  { path: "/projects", expectedStatus: 200, name: "Projects" },
  { path: "/blog", expectedStatus: 200, name: "Blog Listing" },
  { path: "/blog/what-to-consider-before-drilling-a-borehole", expectedStatus: 200, name: "Article 1" },
  { path: "/blog/what-is-a-geotechnical-investigation", expectedStatus: 200, name: "Article 2" },
  { path: "/blog/why-site-investigation-matters-before-construction", expectedStatus: 200, name: "Article 3" },
  { path: "/contact", expectedStatus: 200, name: "Contact" },
  { path: "/contact?service=borehole-drilling", expectedStatus: 200, name: "Contact Preselected" },
  { path: "/sitemap.xml", expectedStatus: 200, name: "Sitemap" },
  { path: "/robots.txt", expectedStatus: 200, name: "Robots" },
  { path: "/assets/logo.png", expectedStatus: 200, name: "Logo PNG" },
  { path: "/assets/logo-white.png", expectedStatus: 200, name: "White Logo PNG" },
  { path: "/assets/logo-mark.png", expectedStatus: 200, name: "Logo Mark PNG" },
  { path: "/assets/borehole-hero-image.png", expectedStatus: 200, name: "Hero Borehole Image" },
  { path: "/non-existent-page-test", expectedStatus: 404, name: "404 Not Found Handling" },
];

async function checkUrl(route) {
  return new Promise((resolve) => {
    http.get(`http://localhost:3000${route.path}`, (res) => {
      let data = "";
      res.on("data", (chunk) => { data += chunk; });
      res.on("end", () => {
        const passed = res.statusCode === route.expectedStatus;
        const hasDeadHash = data.includes('href="#"');
        resolve({
          ...route,
          status: res.statusCode,
          passed,
          hasDeadHash,
          bodyLength: data.length,
        });
      });
    }).on("error", (err) => {
      resolve({
        ...route,
        status: "ERR",
        passed: false,
        error: err.message,
      });
    });
  });
}

async function run() {
  console.log("=== AMAAN WEBSITE VERIFICATION SUITE ===\n");
  let allPassed = true;

  for (const r of routes) {
    const res = await checkUrl(r);
    const mark = res.passed ? "✔ PASS" : "✖ FAIL";
    console.log(`${mark} [${res.status}] ${r.name.padEnd(30)} ${r.path}`);
    if (res.hasDeadHash) {
      console.log(`  ⚠ WARNING: Page contains href="#" dead link!`);
      allPassed = false;
    }
    if (!res.passed) {
      allPassed = false;
      if (res.error) console.log(`  Error: ${res.error}`);
    }
  }

  console.log("\n==========================================");
  if (allPassed) {
    console.log("ALL ROUTE AND ASSET INTEGRITY CHECKS PASSED!");
  } else {
    console.log("SOME CHECKS FAILED! Please inspect output.");
    process.exit(1);
  }
}

run();
