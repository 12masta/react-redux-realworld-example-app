describe('My First Tests', function () {
  const baseUrl = Cypress.config('baseUrl')

  it('Visits app', function () {
    cy.visit(`${baseUrl}/`)
  })

  it('My First Get', function () {
    cy.visit(`${baseUrl}/`)
    cy.get('.navbar-brand')
  })

  it('My First Click', function () {
    cy.visit(`${baseUrl}/`)
    cy.get(':nth-child(3) > .nav-link').click()
  })

  it('My First Assertion', function () {
    cy.visit(`${baseUrl}/`)
    cy.get(':nth-child(3) > .nav-link').click()
    cy.url().should('include', '/register')
  })

  it('My First type', function () {
    cy.visit(`${baseUrl}/register`)

    cy.get(':nth-child(1) > .form-control')
      .type('exampleusername')
      .should('have.value', 'exampleusername')
  })
})