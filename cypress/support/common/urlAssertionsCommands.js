Cypress.Commands.add('shouldUrlContain', (url) => {
    Cypress.log({
        name: 'shouldUrlContain',
        message: `${url}`
    })
    cy.url()
        .should('contain', url)
})