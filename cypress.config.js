const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL || 'https://www.saucedemo.com',
    setupNodeEvents(on, config) {
      config.env.username = process.env.USERNAME || 'standard_user';
      config.env.password = process.env.PASSWORD || 'secret_sauce';
      return config;
    },
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: true,
      json: true
    }
  },
});
