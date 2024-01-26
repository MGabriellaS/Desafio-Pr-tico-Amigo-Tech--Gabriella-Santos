const el = require('./elements').ELEMENTS;

class Cart {

   addItenOnCart(productTitle) {
        cy.contains(el.itemTitle, productTitle)
            .closest('.details') 
            .find(el.addToCartButton)
            .click();
    }

    goToCartThroughNotification() {
        cy.get(el.barSucessMessage) 
        .contains('a', 'shopping cart')
        .click(); 
        cy.url().should('include', '/cart');
    }

    clickCheckout() {
        cy.get(el.termsOfService).check();
        cy.get(el.checkoutButton).click();
    }

    checkoutWithoutCheckTerms() {
        cy.get(el.checkoutButton).click();
    }

    completeCheckout() {
        const variaveis = ['billing', 'shipping', 'shipping-method', 'payment-method', 'payment-info', 'confirm-order'];

        variaveis.forEach(variavel => {
          const dynamicClass = `#${variavel}-buttons-container > .button-1`;

          cy.get(dynamicClass).should('be.visible').click(); 
        });
        this.viewSucessMessage();
         cy.get(el.completeCheckout).click();
    }

    viewSucessMessage() {
        cy.get(el.sucessOrder).should('contain', 'Your order has been successfully processed!');
       
    }

    viewAlertMessage(){
        cy.get(el.warningBox).should('be.visible');

        cy.get(el.warningMessage).invoke('text').then((alertMessage) => {
            expect(alertMessage.trim()).to.equal('Please accept the terms of service before the next step.');
        });

        cy.get(el.closeWarningBox).click();
        
        cy.get(el.warningBox).should('not.visible');
    }

    removeIten(){
        cy.get(el.removeIten).check();
        cy.get(el.updateCartButton).click();
        cy.get(el.orderContent).should('contain.text', 'Your Shopping Cart is empty!');
    }
}

export default new Cart();