import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page.js';

test.describe('Login Tests', () => {
  test('Успешный логин', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory.html/);
  });

  test('Неуспешный логин', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('invalid', 'wrong');
    const error = await loginPage.getErrorMessage();
    expect(error).toContain('Username and password do not match');
  });
});