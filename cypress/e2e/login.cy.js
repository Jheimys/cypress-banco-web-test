describe('Login', () => {
  beforeEach(() => {
     cy.visit('/')
  })
  it('Login com dados válidos deve permitir acesso ao sistema', () => {
    cy.fazerLoginValido()
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

   it('Login com dados inválidos deve apresentar mensagem de erro', () => {
    cy.fazerLoginInvalido()
    cy.get('.toast')

    cy.mensagemToast('Erro no login. Tente novamente.')
  })
})