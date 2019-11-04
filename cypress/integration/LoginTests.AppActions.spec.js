describe('Login Tests App Actions', function () {
    it('Successfull login', function () {
        cy.createNewUserAPI('test', 'test@test.com', 'test')
            .visit('http://localhost:4100/login')
            .login('test@test.com', 'test')
            .shouldUrlContain('http://localhost:4100/')
            .shouldBeLoggedIn('test', 'test@test.com', 'test')
    })

    it('Incorrect password', function () {
        cy.createNewUserAPI('test', 'test@test.com', 'test')
            .visit('http://localhost:4100/login')
            .login('test@test.com', 'test2')
            .shouldUrlContain('http://localhost:4100/login')
            .shouldErrorMessageBeValid('Error Invalid email / password.')
    })

    it('Not existing user', function () {
        cy.deleteUserAPI('test', 'test@test.com', 'test')
            .visit('http://localhost:4100/login')
            .login('test@test.com', 'test')
            .shouldUrlContain('http://localhost:4100/login')
            .shouldErrorMessageBeValid('Error Invalid email / password.')
    })

    it('Empty fields', function () {
        cy.visit('http://localhost:4100/login')
            .login('', '')
            .shouldUrlContain('http://localhost:4100/login')
            .shouldErrorMessagesBeValid('\'Email\' must not be empty.', '\'Password\' must not be empty.')
    })
})