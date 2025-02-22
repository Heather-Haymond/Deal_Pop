const puppeteer = require("puppeteer");

(async () => {
  // Launch browser
  const browser = await puppeteer.launch({ headless: true }); // Change to false to see browser
  const page = await browser.newPage();

  // Navigate to a product page (Example: Amazon)
  await page.goto("https://www.amazon.com/dp/B0C6XNBG3N", { waitUntil: "domcontentloaded" });

  // Extract product title
  const title = await page.$eval("#productTitle", (el) => el.innerText.trim());

  console.log("Product Title:", title);

  await browser.close();
})();
