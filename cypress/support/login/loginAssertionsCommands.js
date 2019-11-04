Cypress.Commands.add('shouldBeLoggedIn', (username, email, password) => {
    Cypress.log({
        name: 'shouldBeLoggedIn',
        message: `${username} | ${email}| ${password}`
    })
    cy.get(':nth-child(4) > .nav-link')
        .should('have.attr', 'href', '/@test')
        .get(':nth-child(3) > .nav-link')
        .should('have.attr', 'href', '/settings')
        .get('.container > .nav > :nth-child(2) > .nav-link')
        .should('have.attr', 'href', '/editor')
})

Cypress.Commands.add('shouldErrorMessageBeValid', (text) => {
    Cypress.log({
        name: 'shouldErrorMessageBeValid',
        message: `${text}`
    })
    cy.get('.error-messages > li')
        .should('have.text', text)
})

Cypress.Commands.add('shouldErrorMessagesBeValid', (message, secondeMessgae) => {
    Cypress.log({
        name: 'shouldErrorMessagesBeValid',
        message: `${message} | ${secondeMessgae}`
    })
    cy.get('.error-messages > :nth-child(1)')
        .should('have.text', message)
        .get('.error-messages > :nth-child(2)')
        .should('have.text', secondeMessgae)
})