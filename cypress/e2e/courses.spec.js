/// <reference types="Cypress" />

// import * as LogingComponent from '../components/login_component';
import * as CourseComponent from '../components/course_component';
import * as Utils from '../support/utils';

describe('Course functionalities', () => {
  context('admin user operations', () => {
    beforeEach(() => {
      Utils.loginWithAPI('admin', 'admin');
      Utils.visitAPage('courses');
      // LogingComponent.performLogin('admin', 'admin');
    });
    it('should show the delete course button', () => {
      CourseComponent.deleteCourseButton().should('be.visible');
    });

    it('add a new course', () => {
      CourseComponent.addNewCourse('Learn Lua');
      CourseComponent.deleteCourseButton().should('have.length', 3);
      
    });

    it('should delete an existing course', () => {
      CourseComponent.deleteCourseButton().last().click();
      CourseComponent.deleteCourseButton().should('have.length', 2);
    });

  });

  context.only('regular user operations', () => {
    beforeEach(() => {
      Utils.loginWithAPI('user', 'user');
      Utils.visitAPage('courses');
    });

    it('should show the list of existing courses', () => {
      CourseComponent.courseName();
    });
    
  });

});
