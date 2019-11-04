import HomePage from './HomePage'

class LoginPage {
    login(email, password) {
        if (email) {
            cy.get(':nth-child(1) > .form-control')
                .type(email)
        }
        if (password) {
            cy.get(':nth-child(2) > .form-control')
                .type(password)
        }
        cy.get('.btn')
            .click()
    }

    loginIncorrectPass(email, password) {
        this.login(email, password)
        return new LoginPage()
    }

    loginCorrectPass(email, password) {
        this.login(email, password)
        return new HomePage()
    }

    url() {
        return cy.url()
    }

    errorMessage() {
        return cy.get('.error-messages > li')
    }
}

export default LoginPage;