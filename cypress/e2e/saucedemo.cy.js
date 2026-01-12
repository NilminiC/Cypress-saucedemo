import LoginPage from '../support/pageObjects/LoginPage.js';
import InventoryPage from '../support/pageObjects/InventoryPage.js';

describe('SauceDemo E2E Test', () => {
  it('logs in, checks first item, adds to cart, and verifies cart badge', () => {
    cy.fixture('credentials').then((creds) => {
      LoginPage.visit();
      LoginPage.login(creds.username, creds.password);

      InventoryPage.assertFirstItemName('Sauce Labs Backpack');
      InventoryPage.addFirstItemToCart();
      InventoryPage.assertCartCount(1);

      cy.log('All checks done. Test complete.');
    });
  });
});

