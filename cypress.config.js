const { defineConfig } = require("cypress");
const Mochawesome = require("mochawesome");

module.exports = defineConfig({
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/report',
    overwrite: true,
    html: true,
    json: false, 
    timestamp: 'ddmmyyyy_HHMMss' 
  } 
});
