describe('Login Tests App Actions', function () {

    beforeEach(function () {
        cy.visit('/login')
    })

    it('Successfull login', function () {
        cy.createNewUserAPI('test', 'test@test.com', 'test')
            .login('test@test.com', 'test')
            .shouldUrlBe('/')
            .shouldBeLoggedIn('test', 'test@test.com', 'test')
    })

    it('Incorrect password', function () {
        cy.createNewUserAPI('test', 'test@test.com', 'test')
            .login('test@test.com', 'test2')
            .shouldUrlBe('/login')
            .shouldErrorMessageBeValid('Error Invalid email / password.')
    })

    it('Not existing user', function () {
        cy.deleteUserAPI('test', 'test@test.com', 'test')
            .login('test@test.com', 'test')
            .shouldUrlBe('/login')
            .shouldErrorMessageBeValid('Error Invalid email / password.')
    })

    it('Empty fields', function () {
        cy.login('', '')
            .shouldUrlBe('/login')
            .shouldErrorMessagesBeValid('\'Email\' must not be empty.', '\'Password\' must not be empty.')
    })
})