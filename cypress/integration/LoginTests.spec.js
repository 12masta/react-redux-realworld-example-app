describe('Login Tests', function () {
  it('Successfull login', function () {
    cy.request('DELETE', 'http://localhost:5000/users', {
      user: {
        username: 'test',
        email: 'test@test.com',
        password: 'test'
      }
    })
    cy.request('POST', 'http://localhost:5000/users', {
      user: {
        username: 'test',
        email: 'test@test.com',
        password: 'test'
      }
    })

    cy.visit('http://localhost:4100/login')

    cy.get(':nth-child(1) > .form-control')
      .type('test@test.com')
    cy.get(':nth-child(2) > .form-control')
      .type('test')
    cy.get('.btn')
      .click()

    cy.url()
      .should('contain', 'http://localhost:4100/')
    cy.get(':nth-child(4) > .nav-link')
      .should('have.attr', 'href', '/@test')
    cy.get(':nth-child(3) > .nav-link')
      .should('have.attr', 'href', '/settings')
    cy.get('.container > .nav > :nth-child(2) > .nav-link')
      .should('have.attr', 'href', '/editor')
  })

  it('Incorrect password', function () {
    cy.request('DELETE', 'http://localhost:5000/users', {
      user: {
        username: 'test',
        email: 'test@test.com',
        password: 'test'
      }
    })
    cy.request('POST', 'http://localhost:5000/users', {
      user: {
        username: 'test',
        email: 'test@test.com',
        password: 'test'
      }
    })

    cy.visit('http://localhost:4100/login')

    cy.get(':nth-child(1) > .form-control')
      .type('test@test.com')
    cy.get(':nth-child(2) > .form-control')
      .type('test-icorrect')
    cy.get('.btn')
      .click()

    cy.url()
      .should('contain', 'http://localhost:4100/login')
    cy.get('.error-messages > li')
      .should('have.text', 'Error Invalid email / password.')
  })

  it('Not existing user', function () {
    cy.request('DELETE', 'http://localhost:5000/users', {
      user: {
        username: 'test',
        email: 'test@test.com',
        password: 'test'
      }
    })

    cy.visit('http://localhost:4100/login')

    cy.get(':nth-child(1) > .form-control')
      .type('test@test.com')
    cy.get(':nth-child(2) > .form-control')
      .type('test-icorrect')
    cy.get('.btn')
      .click()

    cy.url()
      .should('contain', 'http://localhost:4100/login')
    cy.get('.error-messages > li')
      .should('have.text', 'Error Invalid email / password.')
  })

  it('Empty fields', function () {
    cy.visit('http://localhost:4100/login')

    cy.get('.btn')
      .click()

    cy.url()
      .should('contain', 'http://localhost:4100/login')
    cy.get('.error-messages > :nth-child(1)')
      .should('have.text', '\'Email\' must not be empty.')
    cy.get('.error-messages > :nth-child(2)')
      .should('have.text', '\'Password\' must not be empty.')
  })
})