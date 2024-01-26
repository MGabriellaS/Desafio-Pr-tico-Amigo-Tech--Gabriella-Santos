import Login from '../support/pages/Login';

describe ('Login', function() {

    it.only('Can Login on sistem', () => {
        Login.login();   
    })

})