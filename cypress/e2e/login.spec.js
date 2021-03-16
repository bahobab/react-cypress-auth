/// < reference types="Cypress"/>

describe('test all login functionalities', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('normal user login with email and password', () => {
    cy.get('[data-cy=login-email-field]').type('user');
    cy.get('[data-cy=login-password-field]').type('user');
    cy.get('[data-cy=login-button]').click();
  });

  /* === Test Created with Cypress Studio === */
  it('admin user should login with email and password', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[data-cy=login-email-field]').clear();
    cy.get('[data-cy=login-email-field]').type('admin');
    cy.get('[data-cy=login-password-field]').clear();
    cy.get('[data-cy=login-password-field]').type('admin');
    cy.get('[data-cy=login-button]').click();
    /* ==== End Cypress Studio ==== */
  });
})
