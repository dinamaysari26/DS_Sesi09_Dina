const { expect }    = require('@wdio/globals')
const LoginPage     = require('../pageobjects/login.page')
const HomePage      = require('../pageobjects/home.page')

describe('Swag Labs',() => {

    it('must log in using the username standar_user account',async() => {
        // todo: akan dibuatkan skenario positif case
        await LoginPage.open();
        await LoginPage.login("standard_user","secret_sauce");
        await HomePage.validateHomePage();
    })

    it('must log in error when using a locked_out_user account',async() => {
        // todo: akan dibuatkan skenario negatif case
        await LoginPage.open();
        await LoginPage.login("locked_out_user","secret_sauce");
        await LoginPage.validateError();
    })

    it('must log in using the username problem_user account', async() =>{
        await LoginPage.open();
        await LoginPage.login("problem_user","secret_sauce");
        await HomePage.validateHomePage();
        await HomePage.validateDogImage();
    })

})
