const data = require("../../../data/creds")
const landingPage = require("../../../pageobjects/landingPage")
const registerPage = require("../../../pageobjects/registerPage")

describe('signup feature', ()=>{
    it('should be able to sign up for tribed', ()=>{
        landingPage.skipBTN.click()
        registerPage.firstNameInput.setValue(data.fname)
        registerPage.lastNameInput.setValue(data.lname)
        registerPage.emailInput.setValue(data.UserEmail)
        registerPage.passwordInput.setValue(data.Password)
        registerPage.findMyTribeBTN.click()
        driver.pause(5000)
    })
})
