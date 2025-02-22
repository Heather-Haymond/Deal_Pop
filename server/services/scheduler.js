// server/scheduler.js
const axios = require("axios");
const cron = require("node-cron");

function startPriceScraping() {
  cron.schedule("*/30 * * * *", async () => { //every 30 min
    console.log("Running scheduled price check...");
    try {
      const response = await axios.get("http://localhost:5001/api/scraper/price?url=https://example.com");
      console.log("Scraped Price:", response.data.price);
    } catch (error) {
      console.error("Cron job error:", error.message);
    }
  });
}

module.exports = { startPriceScraping };

