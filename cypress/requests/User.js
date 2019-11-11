class User {
  usersEndpointUrl = Cypress.config('apiUrl') + '/users'

  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  create() {
    Cypress.log({
      name: 'Log.User.create()',
      message: `${this.username} | ${this.email} | ${this.password}`
    })
    cy.request('DELETE', this.usersEndpointUrl, {
      user: {
        username: this.username,
        email: this.email,
        password: this.password
      }
    })
    cy.request('POST', this.usersEndpointUrl, {
      user: {
        username: this.username,
        email: this.email,
        password: this.password
      }
    })
    return this;
  }

  remove() {
    Cypress.log({
      name: 'Log.User.remove()',
      message: `${this.username} | ${this.email} | ${this.password}`
    })
    cy.request('DELETE', this.usersEndpointUrl, {
      user: {
        username: this.username,
        email: this.email,
        password: this.password
      }
    })
    return this;
  }
}

export default User;