/// <reference types="Cypress" />

import * as Utils from '../support/utils';
import * as HeaderComponent from '../components/header_component';

describe('Logout functionality', () => {
    it('log out admin user', () => {
      Utils.loginWithAPI('admin', 'admin');
      Utils.visitAPage('courses');

      HeaderComponent.signoutButton().should('be.visible');
      HeaderComponent.signoutButton().click();
      Utils.checkUrl().should('contain', '/notloggedin');
  });

  it('logout regular user', () => {
    Utils.loginWithAPI('user', 'user');
    Utils.visitAPage('courses');

    HeaderComponent.signoutButton().should('be.visible');
    HeaderComponent.signoutButton().click();
    Utils.checkUrl().should('contain', '/notloggedin');
  });
});