describe('Login', () => {
  beforeEach(() => {
     cy.visit('/')
  })
  it('Login com dados válidos deve permitir acesso ao sistema', () => {
    cy.fixture('credenciais').then((credenciais) => {
      cy.get('#username').click().type(credenciais.valida.username)
      cy.get('#senha').click().type(credenciais.valida.senha)

    })
    cy.contains('button', 'Entrar').click()
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

   it('Login com dados inválidos deve apresentar mensagem de erro', () => {
    cy.fixture('credenciais').then((credenciais) => {
      cy.get('#username').click().type(credenciais.invalida.username)
      cy.get('#senha').click().type(credenciais.invalida.senha)
    })
    cy.contains('button', 'Entrar').click()
    cy.get('.toast')

    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
  })
})