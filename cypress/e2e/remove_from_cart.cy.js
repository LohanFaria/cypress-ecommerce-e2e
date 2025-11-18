/// <reference types="cypress" />

describe('Carrinho - Remover produto', () => {
  beforeEach(() => {
    
    cy.addProductToCart();
  });

   it('deve remover o produto do carrinho com sucesso', () => {
    
    cy.get('#cart-drawer').should('be.visible');

    
    cy.get('#cart-drawer ul li')
      .should('have.length.greaterThan', 0);

    
    cy.get('#cart-drawer > ul > li > div > div.flex.flex-wrap.gap-2.justify-end.items-center > div > button').click();

    // Agora valida que não há mais itens na lista do carrinho
    cy.get('#cart-drawer ul li', { timeout: 10000 })
      .should('have.length', 0);

    Cypress.on('uncaught:exception', (err, runnable) => {
  
    return false;
    
    });
  });
});
