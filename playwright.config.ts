const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests', // Directory for Playwright tests
  testMatch: ['*.spec.js', 'quicktest.js'], // Include your specific test file
  retries: 0,
  timeout: 30000,
});
