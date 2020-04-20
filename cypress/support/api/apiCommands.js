const usersEndpointUrl = Cypress.env('apiUrl') + '/users'

Cypress.Commands.add('createNewUserAPI', (username, email, password) => {
    Cypress.log({
        name: 'createNewUserAPI',
        message: `${username} | ${email}| ${password}`
    })
    cy.request('DELETE', usersEndpointUrl, {
        user: {
            username: username,
            email: email,
            password: password
        }
    })
    cy.request('POST', usersEndpointUrl, {
        user: {
            username: username,
            email: email,
            password: password
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
            username: username,
            email: email,
            password: password
        }
    })
})