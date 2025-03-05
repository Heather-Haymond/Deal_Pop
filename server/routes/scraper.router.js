const express = require("express");
const puppeteer = require("puppeteer");

const router = express.Router();

router.get("/price", async (req, res) => {
  try {
    const url = req.query.url; // Get URL from query params
    if (!url) {
      return res.status(400).json({ error: "Missing URL parameter" });
    }

    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "load", timeout: 0 });

    // Modify selector based on the website structure
    const price = await page.evaluate(() => {
      const priceElement = document.querySelector(".price-selector"); // Replace with actual selector
      return priceElement ? priceElement.innerText : "Price not found";
    });

    await browser.close();
    res.json({ url, price });
  } catch (error) {
    console.error("Scraping failed:", error);
    res.status(500).json({ error: "Scraping failed" });
  }
});

module.exports = router;
