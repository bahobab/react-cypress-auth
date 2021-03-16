/// <reference types="Cypress" />

import * as LogingComponent from '../components/login_component';
import * as CourseComponent from '../components/course_component';
import * as Utils from '../support/utils';

describe('Course functionalities', () => {
  context('admin user signed in', () => {
    beforeEach(() => {
      Utils.visitAPage('login');
      LogingComponent.performLogin('admin', 'admin');
    });

    it('should show the delete course button', () => {
      CourseComponent.deleteCourseButton().should('be.visible');
    });
  });
})
