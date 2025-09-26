import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect page to contain welcome text from both Hero and NxWelcome components
  await expect(
    page.getByRole('heading', { name: 'Welcome to our Demo' })
  ).toBeVisible();
  await expect(
    page.getByRole('heading', { name: /Hello there, Welcome @nx-demo\/app-1/ })
  ).toBeVisible();
});
