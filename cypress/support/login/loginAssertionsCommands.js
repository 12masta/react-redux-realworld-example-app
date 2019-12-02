Cypress.Commands.add('shouldBeLoggedIn', (username, email, password) => {
    Cypress.log({
        name: 'shouldBeLoggedIn',
        message: `${username} | ${email}| ${password}`
    })
    cy.get('[data-cy=profile-link]')
        .should('have.attr', 'href', '/@test')
        .get('[data-cy=settings-link]')
        .should('have.attr', 'href', '/settings')
        .get('[data-cy=editor-link]')
        .should('have.attr', 'href', '/editor')
})

Cypress.Commands.add('shouldErrorMessageBeValid', (text) => {
    Cypress.log({
        name: 'shouldErrorMessageBeValid',
        message: `${text}`
    })
    cy.get('[data-cy=error-message]')
        .should('have.text', text)
})

Cypress.Commands.add('shouldErrorMessagesBeValid', (message, secondeMessgae) => {
    Cypress.log({
        name: 'shouldErrorMessagesBeValid',
        message: `${message} | ${secondeMessgae}`
    })
    cy.get('[data-cy=error-message]')
        .first()
        .should('have.text', message)
        .next()
        .should('have.text', secondeMessgae)
})