const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/tests/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: 'cypress/support/e2e.js', 
  },

  component: {
  
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
