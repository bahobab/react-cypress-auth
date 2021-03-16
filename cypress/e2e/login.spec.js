/// < reference types="Cypress"/>

import * as LogingComponent from './components/login_component';
import * as HeaderComponent from './components/header_component';
import * as CourseComponent from './components/course_component';

describe('test all login functionalities', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('normal user login with email and password', () => {
    LogingComponent.performLogin('user', 'user');
    cy.url().should('contain', '/courses');
    HeaderComponent.signoutButton().should('be.visible');
    // cy.get('[data-cy=delete-course-button]').should('not.be.visible');
  });

  /* === Test Created with Cypress Studio === */
  it('admin user should login with email and password', function() {
    /* ==== Generated with Cypress Studio ==== */
    LogingComponent.performLogin('admin', 'admin');
    cy.url().should('contain', '/courses');
    HeaderComponent.signoutButton().should('be.visible');
    CourseComponent.deleteCourseButton().should('be.visible');
    /* ==== End Cypress Studio ==== */
  });
})
