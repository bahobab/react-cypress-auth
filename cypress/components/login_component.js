export const loginEmailField = () => cy.get('[data-cy=login-email-field]');
export const loginPasswordField = () => cy.get('[data-cy=login-password-field]');
export const loginButton = () => cy.get('[data-cy=login-button]');

// actions

export const performLogin = (email, password) => {
  loginEmailField().type(email);
  loginPasswordField().type(password);
  loginButton().click();
}