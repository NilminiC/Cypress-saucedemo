class InventoryPage {
  assertFirstItemName(expectedName) {
    cy.url().should('include', '/inventory.html');
    cy.get('.inventory_item')
      .first()
      .find('[data-test="inventory-item-name"]')
      .should('have.text', expectedName);
  }

  addFirstItemToCart() {
    cy.get('.inventory_item')
      .first()
      .find('button')
      .click();
  }

  assertCartCount(expected) {
    cy.get('[data-test="shopping-cart-badge"]')
      .should('be.visible')
      .and('have.text', expected.toString());
  }
}

export default new InventoryPage();
