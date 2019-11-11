import LoginPage from '../pageobjects/LoginPage'
import User from '../requests/User'

describe('Login Tests Page Objects', function () {

  const baseUrl = Cypress.config('baseUrl')

  beforeEach(function () {
    cy.visit('/login')
  })

  it('Successfull login', function () {
    new User('test', 'test@test.com', 'test')
      .remove()
      .create()

    const homePage = new LoginPage()
      .loginCorrectPass('test@test.com', 'test')

    homePage.url()
      .should('equal', baseUrl + '/')
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

    const loginPage = new LoginPage()
      .loginIncorrectPass('test@test.com', 'test-incorrect')

    loginPage.url()
      .should('equal', baseUrl + '/login')
    loginPage.errorMessage()
      .should('have.text', 'Error Invalid email / password.')
  })

  it('Not existing user', function () {
    new User('test', 'test@test.com', 'test')
      .remove()

    const loginPage = new LoginPage()
      .loginIncorrectPass('test@test.com', 'test')

    loginPage.url()
      .should('equal', baseUrl + '/login')
    loginPage.errorMessage()
      .should('have.text', 'Error Invalid email / password.')
  })

  it('Empty fields', function () {
    const loginPage = new LoginPage()
      .loginIncorrectPass('', '')

    loginPage.url()
      .should('equal', baseUrl + '/login')
    loginPage.errorMessage()
      .should('have.length', 2)
    loginPage.errorMessage().first()
      .should('have.text', '\'Email\' must not be empty.')
      .next()
      .should('have.text', '\'Password\' must not be empty.')
  })
})