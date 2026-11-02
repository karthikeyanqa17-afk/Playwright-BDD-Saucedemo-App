export class InventoryPage {
  constructor(page) {
    this.page = page;
    this.pageTitle = page.locator('.title');
    this.sortDropdown = page.locator('.product_sort_container');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.cartLink = page.locator('.shopping_cart_link');
  }

  async sortBy(value) {
    await this.sortDropdown.selectOption(value);
  }

  async addItemToCart(itemName) {
    await this.page.locator(`[data-test="add-to-cart-${itemName}"]`).click();
  }

  async removeItemFromCart(itemName) {
    await this.page.locator(`[data-test="remove-${itemName}"]`).click();
  }

  async goToCart() {
    await this.cartLink.click();
  }
}