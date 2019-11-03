Cypress.Commands.add('login', (username, password) => {
    Cypress.log({
        name: 'login',
        message: `${username} | ${password}`,
    })
    if (username) {
        cy.get(':nth-child(1) > .form-control')
            .type(username)
    }
    if (password) {
        cy.get(':nth-child(2) > .form-control')
            .type(password)
    }
    cy.get('.btn')
        .click()
})