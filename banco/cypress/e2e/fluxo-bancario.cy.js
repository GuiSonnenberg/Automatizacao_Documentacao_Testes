describe('Fluxo Bancário - Interface Web', () => {
  beforeEach(() => {
    // Visita a página servida localmente
    cy.visit('/index.html');
  });

  it('Deve carregar a página com saldos zerados', () => {
    cy.get('h1').should('contain', 'Painel do Banco');
    cy.get('#saldo-origem').should('have.text', '0.00');
    cy.get('#saldo-destino').should('have.text', '0.00');
  });

  it('Deve realizar um depósito corretamente', () => {
    cy.get('#valor-deposito').type('100');
    cy.get('#btn-depositar').click();

    cy.get('#saldo-origem').should('have.text', '100.00');
    cy.get('#test-log').should('contain', 'Depósito de R$ 100.00 realizado');
  });

  it('Deve realizar um saque com sucesso se houver saldo', () => {
    // Prepara o cenário com depósito prévio
    cy.get('#valor-deposito').type('200');
    cy.get('#btn-depositar').click();

    // Ação de saque
    cy.get('#valor-saque').type('50');
    cy.get('#btn-sacar').click();

    // Verificação
    cy.get('#saldo-origem').should('have.text', '150.00');
    cy.get('#test-log').should('contain', 'Saque de R$ 50.00 realizado');
  });

  it('Deve impedir saque se o saldo for insuficiente', () => {
    cy.get('#valor-saque').type('50');
    cy.get('#btn-sacar').click();

    cy.get('#saldo-origem').should('have.text', '0.00');
    cy.get('#test-log').should('contain', 'Erro: saldo insuficiente');
  });

  it('Deve realizar transferência entre contas', () => {
    // Depósito inicial na conta origem
    cy.get('#valor-deposito').type('300');
    cy.get('#btn-depositar').click();

    // Transferência
    cy.get('#valor-transferencia').type('100');
    cy.get('#btn-transferir').click();

    // Verificações
    cy.get('#saldo-origem').should('have.text', '200.00');
    cy.get('#saldo-destino').should('have.text', '100.00');
    cy.get('#test-log').should('contain', 'Transferência de R$ 100.00 realizada');
  });
});