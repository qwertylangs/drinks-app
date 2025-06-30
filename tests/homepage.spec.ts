import { test, expect } from 'playwright/test';

test('должен отобразить заголовок Cocktails App', async ({ page }) => {
  await page.goto('/');
  const title = await page.locator('h1');
  await expect(title).toHaveText(/Cocktails App/i);
});
