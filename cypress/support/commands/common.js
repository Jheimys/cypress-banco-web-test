Cypress.Commands.add('mensagemToast', (mensagem) => {
    cy.get('.toast').should('have.text', mensagem)
})

Cypress.Commands.add('selecionarOpcaoDropdown', (label, opcao) => {
    cy.get(`label[for="${label}"]`).parent().as(`campo-${label}`)
        cy.get(`@campo-${label}`).click()
        cy.get(`@campo-${label}`).contains(opcao).click()
})