class HomePage {
    url() {
        return cy.url()
    }

    userProfile() {
        return cy.get('[data-cy=profile-link]')
    }

    settings() {
        return cy.get('[data-cy=settings-link]')
    }

    editor() {
        return cy.get('[data-cy=editor-link]')
    }
}

export default HomePage;