Cypress.Commands.add('login', (username, password) => {
    Cypress.log({
        name: 'login',
        message: `${username} | ${password}`,
    })
    if (username) {
        cy.get('[data-cy=email-input]')
            .type(username)
    }
    if (password) {
        cy.get('[data-cy=password-input]')
            .type(password)
    }
    cy.get('[data-cy=button-input]')
        .click()
})