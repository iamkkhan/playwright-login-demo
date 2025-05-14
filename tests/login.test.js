const { test, expect } = require('@playwright/test');

test('Login to ExpandTesting Practice Site', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/login');

  await page.fill('#username', 'practice');
  await page.fill('#password', 'SuperSecretPassword!');
  await page.click('button[type="submit"]');

  await expect(page).toHaveURL('https://practice.expandtesting.com/secure');

  // Check that the logout button appears
  const logoutBtn = page.locator('a[href="/logout"]');
  await expect(logoutBtn).toBeVisible();

  
});
