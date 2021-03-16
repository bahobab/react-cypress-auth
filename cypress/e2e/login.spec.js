/// < reference types="Cypress"/>

describe('test all login functionalities', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('normal user login with email and password', () => {
    cy.get('[data-cy=login-email-field]').type('user');
    cy.get('[data-cy=login-password-field]').type('user');
    cy.get('[data-cy=login-button]').click();
    cy.url().should('contain', '/courses');
    cy.get('[data-cy=signout-button]').should('be.visible');
    // cy.get('[data-cy=delete-course-button]').should('not.be.visible');
  });

  /* === Test Created with Cypress Studio === */
  it('admin user should login with email and password', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[data-cy=login-email-field]').clear();
    cy.get('[data-cy=login-email-field]').type('admin');
    cy.get('[data-cy=login-password-field]').clear();
    cy.get('[data-cy=login-password-field]').type('admin');
    cy.get('[data-cy=login-button]').click();
    cy.url().should('contain', '/courses');
    cy.get('[data-cy=signout-button]').should('be.visible');
    cy.get('[data-cy=delete-course-button]').should('be.visible');
    /* ==== End Cypress Studio ==== */
  });
})
