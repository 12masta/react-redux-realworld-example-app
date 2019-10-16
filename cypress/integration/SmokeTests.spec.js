describe('My First Tests', function () {
  it('Visits app', function () {
    cy.visit('http://localhost:4100/')
  })

  it('My First Get', function () {
    cy.visit('http://localhost:4100/')
    cy.get('.navbar-brand')
  })

  it('My First Click', function () {
    cy.visit('http://localhost:4100/')
    cy.get(':nth-child(3) > .nav-link').click()
  })

  it('My First Assertion', function () {
    cy.visit('http://localhost:4100/')
    cy.get(':nth-child(3) > .nav-link').click()
    cy.url().should('include', '/register')
  })

  it('My First type', function () {
    cy.visit('http://localhost:4100/register')

    cy.get(':nth-child(1) > .form-control')
      .type('exampleusername')
      .should('have.value', 'exampleusername')
  })
})