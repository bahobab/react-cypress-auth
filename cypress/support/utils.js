export const visitAPage = (path) => {
  cy.visit(`/${path}`);
}

export const checkUrl = () => cy.url(); 