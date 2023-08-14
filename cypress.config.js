const { defineConfig } = require("cypress");

module.exports = defineConfig({ 
  e2e: {
    projectId: "gw7pna",
    watchForFileChanges: false,
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config){
      // implement node event listeners here
    },
  },
});
