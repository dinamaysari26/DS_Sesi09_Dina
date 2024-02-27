const { expect }    = require('@wdio/globals')
const LoginPage     = require('../pageobjects/login.page')
const SecurePage    = require('../pageobjects/secure.page')
const HomePage      = require('../pageobjects/home.page')



// describe('My Login application', () => {
//     it('should login with valid credentials', async () => {
//         await LoginPage.open()

//         await LoginPage.login('tomsmith', 'SuperSecretPassword!')
//         await expect(SecurePage.flashAlert).toBeExisting()
//         await expect(SecurePage.flashAlert).toHaveTextContaining(
//             'You logged into a secure area!')
//     })
// })


describe('Swag Labs',() => {

    it('harus login dengan standar_user akun',async() => {
        // todo: akan dibuatkan skenario positif case
        await LoginPage.open();
        await LoginPage.login("standard_user","secret_sauce");
        await HomePage.validateHomePage();
    })

    it('harus dapat login error ketika memakai locked_out_user akun',async() => {
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
