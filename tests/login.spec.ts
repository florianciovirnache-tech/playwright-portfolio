import { test, expect } from '@playwright/test';

test('saucedomo page', async ({ page }) => {
  await page.goto('https://saucedemo.com/');
  await expect(page).toHaveTitle('Swag Labs');
});

test.describe('Login Saucedemo', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
  });
    test('fill username', async ({ page }) => {
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });
    test('sort products by price',async ({ page }) => {
    await page.locator('[data-test="product-sort-container"]').selectOption('lohi');
    await expect(page.locator('[data-test="product-sort-container"]')).toHaveValue('lohi');
});
  });
  

