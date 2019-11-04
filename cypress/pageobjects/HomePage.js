class HomePage {
    url() {
        return cy.url()
    }

    userProfile() {
        return cy.get(':nth-child(4) > .nav-link')
    }

    settings() {
        return cy.get(':nth-child(3) > .nav-link')
    }

    editor() {
        return cy.get('.container > .nav > :nth-child(2) > .nav-link')
    }
}

export default HomePage;