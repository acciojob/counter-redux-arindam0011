const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      sspecPattern: "cypress/tests/*.cy.js"
    },
  },

  component: {
  
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
