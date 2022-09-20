describe('empty spec', () => {

  it('should visit site', () => {
    cy.visit('http://localhost:3000/');
  })

  it('should expand and collapse accordion', () => {
    cy.findByRole('button', {  name: /pre\-commit checks/i}).click();
    cy.findByRole('button', {  name: /pre\-commit checks/i}).click();
  });

});