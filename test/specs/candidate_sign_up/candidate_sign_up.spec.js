const sidenav = require("../../../pageobjects/nav/sidenav")
const topNavigation = require("../../../pageobjects/nav/top-navigation")
const landingPage = require("../../../pageobjects/landingPage")
const { loginToYolba, createProfileProcess } = require("../../../support/candidate_sign_up_helpers")
const myNamePage = require("../../../pageobjects/create-profile/myNamePage")
const myFilesAndLinks = require("../../../pageobjects/create-profile/myFilesAndLinks")
const previewPage = require("../../../pageobjects/create-profile/previewPage")
const myWorkStylePage = require("../../../pageobjects/create-profile/myWorkStylePage")

describe("candidate sign up tests", ()=>{
    it("should Verify that a candidate is able to sign up", ()=>{
        loginToYolba({user:"admin"})
    })
    it("should Verify that a candidate can edit their profile", ()=>{
        driver.pause(10000)
        topNavigation.profile.click()
        driver.pause(1000)
        sidenav.createProfileBTN.click()
        createProfileProcess()
        driver.pause(3000)
        myNamePage.xBTN.click()
        driver.pause(6000)
        // sidenav.xBTN.click()
    })
    it("should Verify that on the Candidates profile page there is a progress bar", ()=>{
        driver.pause(1000)
        topNavigation.profile.click()
        driver.pause(1000)
        sidenav.createProfileBTN.click()
        driver.pause(1000)
        if(!myNamePage.progressBar.isDisplayed()){
            throw 'progressbar is not displayed'
        }
        driver.pause(1000)
        myNamePage.xBTN.click()
        driver.pause(6000)
    })
    it("should Verify that a candidate is assigned an animal after sign up", ()=>{})
    it("should Verify that a candidate is able to preview their profile", ()=>{
        topNavigation.profile.click()
        driver.pause(2000)
        sidenav.createProfileBTN.click()
        driver.pause(3000)
        myFilesAndLinks.previewBTN.click()
        driver.pause(1000)
    })
    it("should 	Verify that a candidate is able to publish a profile", ()=>{
        previewPage.publishProfile.click()
    })
})