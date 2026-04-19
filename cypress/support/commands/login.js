
Cypress.Commands.add('fazerLoginValido', () => {
        cy.fixture('credenciais').then((credenciais) => {
        cy.get('#username').click().type(credenciais.valida.username)
        cy.get('#senha').click().type(credenciais.valida.senha)
    })
    cy.contains('button', 'Entrar').click()
})

Cypress.Commands.add('fazerLoginInvalido', () => {
      cy.fixture('credenciais').then((credenciais) => {
      cy.get('#username').click().type(credenciais.invalida.username)
      cy.get('#senha').click().type(credenciais.invalida.senha)
    })
    cy.contains('button', 'Entrar').click()
})