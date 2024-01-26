import Login from '../support/pages/Login';
import Cart from '../support/pages/Cart';

const user = Cypress.env('user_name')
const password = Cypress.env('user_password')

describe ('Cart page', function() {

  beforeEach(() => {
   Login.login();
  })

    it('canBuySuccessfuly', () => {
      const productTitle = '14.1-inch Laptop'
        Cart.addItenOnCart(productTitle); 
        Cart.goToCartThroughNotification();
        Cart.clickCheckout();
        Cart.completeCheckout();
    })

    it('validateRequiredFields', () => {
      const productTitle = '14.1-inch Laptop'
        Cart.addItenOnCart(productTitle); 
        Cart.goToCartThroughNotification();
        Cart.checkoutWithoutCheckTerms();
        Cart.viewAlertMessage(); 
    });

    it.only('deleteItenFromCart', () => {
      const productTitle = '14.1-inch Laptop'
      Cart.addItenOnCart(productTitle); 
      Cart.goToCartThroughNotification();
      Cart.removeIten();
    });

})