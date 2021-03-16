export const deleteCourseButton = () => cy.get('[data-cy=delete-course-button]');
export const addCourseInput = () => cy.get('[data-cy=new-course-input]');
export const addCourseButton = () => cy.get('[data-cy=new-course-button]');

export const addNewCourse = (courseName) => {
  addCourseInput().type(courseName);
  addCourseButton().click();
}