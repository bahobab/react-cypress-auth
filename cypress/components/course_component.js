export const deleteCourseButton = () => cy.get('[data-cy=delete-course-button]');
export const addCourseInput = () => cy.get('[data-cy=new-course-input]');
export const addCourseButton = () => cy.get('[data-cy=new-course-button]');
export const courseName = () => cy.get('[data-cy=course-name]');

export const addNewCourse = (courseName) => {
  addCourseInput().type(courseName);
  addCourseButton().click();
}