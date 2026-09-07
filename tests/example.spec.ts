import { test, expect } from '@playwright/test';

test('google title', async ({ page }) => {
  await page.goto('https://google.com/');
  await expect(page).toHaveTitle('Google');
});

test.describe('Playwright website', () => {
test.beforeEach(async ({ page }) => {
  await page.goto('https://playwright.dev/');
});
test('has title', async ({ page }) => {

  
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  
  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('search locators', async ({ page }) => { 
 
  await page.getByRole('button', { name: 'Search (Control+k)' }).click();
  await page.getByRole('searchbox', { name: 'Search' }).fill('locators');
});

test('assertions practice', async ({ page }) => { 
   
    await page.getByRole('button', { name: 'Search (Control+k)' }).click();
    await page.getByRole('searchbox', { name: 'Search' }).fill('assertions');
    await expect(page.getByRole('searchbox', { name: 'Search' })).toHaveValue('assertions');
});
});