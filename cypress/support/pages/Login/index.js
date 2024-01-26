const el = require('./elements').ELEMENTS;
const email = Cypress.env('user_email');
const password = Cypress.env('password');

class Login{
    login(){
        cy.visit('https://demowebshop.tricentis.com');
        cy.get(el.longinLink).click();
        cy.url().should('include', '/login');
        cy.get(el.email).type(email);
        cy.get(el.password).type(password, { log: false });
        cy.get(el.submit)
        .should('be.visible')
        .click();
        cy.location('pathname', { timeout: 1000 })
            .should('not.eq', '/users/sign_in');
    }

}

export default new Login();