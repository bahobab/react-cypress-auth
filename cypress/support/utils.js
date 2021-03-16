export const visitAPage = (path) => {
  cy.visit(`/${path}`);
};

export const checkUrl = () => cy.url(); 

export const loginWithAPI = (email, password) => {
  cy.request({
    method: 'GET',
    url: 'user_token',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + btoa(email + ':' + password)
    }
  })
  .then(response => {
    localStorage.setItem('role', response.body.role);
    localStorage.setItem('username', response.body.username);
    localStorage.setItem('userToken', response.body.token);
  })
};