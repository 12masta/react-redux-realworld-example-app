const usersEndpointUrl = Cypress.config('apiUrl') + '/users'

Cypress.Commands.add('createNewUserAPI', (username, email, password) => {
    Cypress.log({
        name: 'createNewUserAPI',
        message: `${username} | ${email}| ${password}`
    })
    cy.request('DELETE', usersEndpointUrl, {
        user: {
            username: this.username,
            email: this.email,
            password: this.password
        }
    })
    cy.request('POST', usersEndpointUrl, {
        user: {
            username: this.username,
            email: this.email,
            password: this.password
        }
    })
})

Cypress.Commands.add('deleteUserAPI', (username, email, password) => {
    Cypress.log({
        name: 'deleteUserAPI',
        message: `${username} | ${email}| ${password}`
    })
    cy.request('DELETE', usersEndpointUrl, {
        user: {
            username: this.username,
            email: this.email,
            password: this.password
        }
    })
})