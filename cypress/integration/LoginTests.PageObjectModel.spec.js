import LoginPage from '../pageobjects/LoginPage'
import User from '../requests/User'

describe('Login Tests Page Objects', function () {
  it('Successfull login', function () {
    new User('test', 'test@test.com', 'test')
      .remove()
      .create()

    cy.visit('http://localhost:4100/login')
    const homePage = new LoginPage()
      .loginCorrectPass('test@test.com', 'test')

    homePage.url()
      .should('contain', 'http://localhost:4100/')
    homePage.userProfile()
      .should('have.attr', 'href', '/@test')
    homePage.settings()
      .should('have.attr', 'href', '/settings')
    homePage.editor()
      .should('have.attr', 'href', '/editor')
  })

  it('Incorrect password', function () {
    new User('test', 'test@test.com', 'test')
      .remove()
      .create()

    cy.visit('http://localhost:4100/login')

    const loginPage = new LoginPage()
      .loginIncorrectPass('test@test.com', 'test-incorrect')

    loginPage.url()
      .should('contain', 'http://localhost:4100/login')
    loginPage.errorMessage()
      .should('have.text', 'Error Invalid email / password.')
  })

  it('Not existing user', function () {
    new User('test', 'test@test.com', 'test')
      .remove()

    cy.visit('http://localhost:4100/login')

    const loginPage = new LoginPage()
      .loginIncorrectPass('test@test.com', 'test')

    loginPage.url()
      .should('contain', 'http://localhost:4100/login')
    loginPage.errorMessage()
      .should('have.text', 'Error Invalid email / password.')
  })

  it('Empty fields', function () {
    cy.visit('http://localhost:4100/login')

    const loginPage = new LoginPage()
      .loginIncorrectPass('', '')

    loginPage.url()
      .should('contain', 'http://localhost:4100/login')
    loginPage.errorMessage()
      .should('have.length', 2)
    loginPage.errorMessage().first()
      .should('have.text', '\'Email\' must not be empty.')
      .next()
      .should('have.text', '\'Password\' must not be empty.')
  })
})