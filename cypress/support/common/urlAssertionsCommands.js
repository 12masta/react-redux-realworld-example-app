Cypress.Commands.add('shouldUrlBe', (subPath) => {
    const url = Cypress.config('baseUrl') + subPath
    Cypress.log({
        name: 'shouldUrlBe',
        message: `${url}`
    })
    cy.url()
        .should('equal', url)
})