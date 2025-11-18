/// <reference types="cypress" />

describe('Carrinho - Adicionar produto', () => {
  it('deve adicionar o produto "Endurance Watch" ao carrinho', () => {
    
    cy.addProductToCart();

   
    cy.get('body').then(($body) => {
      
      if ($body.find('.minicart-items, .cart-items, #mini-cart').length) {
        cy.get('.minicart-items, .cart-items, #mini-cart')
          .should('contain.text', 'Endurance Watch');
      } else {
       
        cy.contains('Endurance Watch').should('be.visible');
      }
    });
  });
});


  