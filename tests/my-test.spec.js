import { test, expect } from '@playwright/test';

test('Проверка заголовка Google', async ({ page }) => {
  await page.goto('https://google.com');
  const title = await page.title();
  expect(title).toContain('Google');
});
