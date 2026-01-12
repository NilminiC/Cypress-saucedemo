const { defineConfig } = require("cypress");
require("dotenv").config(); 

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL, 
    setupNodeEvents(on, config) {
      return config;
    },
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      html: true,
      json: true,
      overwrite: false
    }
  }
});
