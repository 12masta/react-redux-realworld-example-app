Cypress.Commands.add('createNewUserAPI', (username, email, password) => {
    Cypress.log({
        name: 'createNewUserAPI',
        message: `${username} | ${email}| ${password}`
    })
    cy.request('DELETE', 'http://localhost:5000/users', {
        user: {
            username: 'test',
            email: 'test@test.com',
            password: 'test'
        }
    })
    cy.request('POST', 'http://localhost:5000/users', {
        user: {
            username: 'test',
            email: 'test@test.com',
            password: 'test'
        }
    })
})

Cypress.Commands.add('deleteUserAPI', (username, email, password) => {
    Cypress.log({
        name: 'deleteUserAPI',
        message: `${username} | ${email}| ${password}`
    })
    cy.request('DELETE', 'http://localhost:5000/users', {
        user: {
            username: 'test',
            email: 'test@test.com',
            password: 'test'
        }
    })
})