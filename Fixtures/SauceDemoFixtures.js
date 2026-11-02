import { test as baseTest, expect } from '@playwright/test';
import { LoginPage } from '../POM/LoginPage.js';
import { InventoryPage } from '../POM/InventoryPage.js';
import { CartPage } from '../POM/CartPage.js';
import { CheckoutPage } from '../POM/CheckoutPage.js';

export const test = baseTest.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
});

export { expect };