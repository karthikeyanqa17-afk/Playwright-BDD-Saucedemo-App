import { createBdd, test } from 'playwright-bdd';
import { expect } from '@playwright/test';


const { Given, When, Then } = createBdd(test);

Given('I am on the Sauce Demo login page', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
});

When('I enter username {string} and password {string}', async ({ page }, username, password) => {
  await page.locator('[data-test="username"]').fill(username);
  await page.locator('[data-test="password"]').fill(password);
});

When('I click the login button', async ({ page }) => {
  await page.locator('[data-test="login-button"]').click();
});

Then('I should see the products page', async ({ page }) => {
  await expect(page.locator('.title')).toBeVisible();
  await expect(page.locator('.title')).toHaveText('Products');
});