describe('Login', () => {
  beforeEach(() => {
     cy.visit('http://localhost:4000')
  })
  it('Login com dados válidos deve permitir acesso ao sistema', () => {
   
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('123456')
    cy.contains('button', 'Entrar').click()
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

   it('Login com dados inválidos deve apresentar mensagem de erro', () => {
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('1234567')
    cy.contains('button', 'Entrar').click()
    cy.get('.toast')

    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
  })
})