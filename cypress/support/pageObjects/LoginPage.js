class LoginPage {
  visit() {
    cy.visit(Cypress.env('BASE_URL'));
  }

  login(username, password) {
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-button"]').click();
  }
}

export default new LoginPage();

