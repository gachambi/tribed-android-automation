const sidenav = require("../../../pageobjects/nav/sidenav")
const topNavigation = require("../../../pageobjects/nav/top-navigation")
const landingPage = require("../../../pageobjects/landingPage")
const { loginToYolba, createProfileProcess } = require("../../../support/candidate_sign_up_helpers")

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
    })
    it("should Verify that on the Candidates profile page there is a progress bar", ()=>{})
    it("should Verify that a candidate is assigned an animal after sign up", ()=>{})
    it("should Verify that a candidate is able to preview their profile", ()=>{})
    it("should 	Verify that a candidate is able to publish a profile", ()=>{})
})