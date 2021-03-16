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
})
