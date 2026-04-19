describe('Transferencia', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.fazerLoginValido()
    })

    it('Realizar transferência com dados válidos deve ser bem-sucedida', () => {
        cy.realizarTransferencia('Mariana', 'Julio', '11')
        cy.mensagemToast('Transferência realizada!')
    })

    
    it('Deve apresentar erro quando tentar transferir valor maior que 5000 sem token', () => {
        cy.realizarTransferencia('Mariana', 'Julio', '5000.01')
        cy.mensagemToast('Autenticação necessária para transferências acima de R$5.000,00.')
    })
})