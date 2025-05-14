// playwright.config.js
module.exports = {
    testDir: './tests',
    reporter: [['html']],
    use: {
      headless: true,
      baseURL: 'https://practice.expandtesting.com',
      screenshot: 'only-on-failure',
      video: 'retain-on-failure'
    }
  };
  