/// <reference types="cypress" />

describe('Checkout - Preenchimento do formulário', () => {
  beforeEach(() => {
    
    cy.addProductToCart();
  });

  it('deve acessar a página de checkout e preencher os dados obrigatórios', () => {
     
    cy.get('#cart-drawer > div:nth-child(7) > div > a.btn.btn-primary').click();

    cy.url().should('include', '/checkout');

    cy.get('#guest_details-email_address')
      .first()
      .clear()
      .type('qa.teste@example.com');

    cy.get('input[name="firstname"]').clear().type('Lohan');
    cy.get('input[name="lastname"]').clear().type('Faria');
    cy.get('input[name="street[0]"], input[name="street[0]"], input[name="street[1]"]')
      .first()
      .clear()
      .type('Rua de Teste QA, 123');
    cy.get('input[name="city"]').clear().type('Cabo Frio');
    cy.get('select[name="country_id"]').select('BR'); 
    cy.get('select[name="region"]').select('Rio de Janeiro');
    cy.get('input[name="postcode"]').clear().type('28900000');
    cy.get('input[name="telephone"]').clear().type('21999999999');

    cy.get('input[type="checkbox"][name*="billing"], input[type="checkbox"][id*="billing"]')
      .first()
      .then(($checkbox) => {
        if (!$checkbox.is(':checked')) {
          cy.wrap($checkbox).check({ force: true });
        }
      });

    cy.contains(/shipping methods/i).should('be.visible');

    cy.contains('label', /fixed/i)
      .should('be.visible')
      .click();

    cy.contains(/payment method/i).should('be.visible');

    cy.contains('label', /check\s*\/\s*money order/i)
      .should('be.visible')
      .click();

    cy.contains('label', /check\s*\/\s*money order/i)
      .closest('div')
      .find('input[type="radio"]')
      .should('be.checked');

    cy.contains(/order summary/i).should('be.visible');
    cy.contains(/cart\s*\(1 item\)/i).should('be.visible');

    cy.contains(/subtotal/i).should('be.visible');
    cy.contains(/grand total/i).should('be.visible');

    cy.get('#hyva-checkout-container > div > div.area-right.checkout-summary.space-y-6 > nav > div > button').click();

    
  });
});
