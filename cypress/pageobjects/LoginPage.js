import HomePage from './HomePage'

class LoginPage {
    login(email, password) {
        if (email) {
            cy.get('[data-cy=email-input]')
                .type(email)
        }
        if (password) {
            cy.get('[data-cy=password-input]')
                .type(password)
        }
        cy.get('[data-cy=button-input]')
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
        return cy.get('[data-cy=error-message]')
    }
}

export default LoginPage;