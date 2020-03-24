describe('Visual regression', function () {
    it('Successfull login', function () {
        cy.visit('/login')
            .createNewUserAPI('test', 'test@test.com', 'test')
            .login('test@test.com', 'test');
        cy.matchImageSnapshot();
    })

    it('Login button check', function () {
        cy.visit('/login');
        cy.get('.btn').matchImageSnapshot();
    })
})