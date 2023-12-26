const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    supportFile: false,
  },
  fixturesFolder: false,
  viewportHeight: 300,
  viewportWidth: 600,
})
