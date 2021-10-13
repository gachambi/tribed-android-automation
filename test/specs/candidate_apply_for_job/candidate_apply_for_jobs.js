const { assert } = require("chai")
const jobsPage = require("../../../pageobjects/main-pages/jobsPage")
const searchPage = require("../../../pageobjects/main-pages/searchPage")
const bottomNav = require("../../../pageobjects/nav/bottomNav")
const { loginToYolba } = require("../../../support/candidate_sign_up_helpers")

describe("candidate can apply for job", ()=>{
    it("should Verify that a user can serch a job they want", ()=>{
        loginToYolba({user:"userWithProfile"})

        bottomNav.search.click()

        const job = "designer"
        searchPage.searchInput.setValue(job)
        searchPage.searchBTN.click()
        driver.pause(3000)
        assert(()=>{
            searchPage.matchingJobsText.isExisting()==true
        }, "user was not able to find jobs")

    })
    it("should Verify that a user can save a job", ()=>{
        searchPage.companiesOrJobsToggle.click()
        driver.pause(3000)
        driver.touchPerform([
            { action: "press", options: { x: 500, y: 1280 } },
            { action: "wait", options: { ms: 1000 } },
            { action: "moveTo", options: { x: 500, y: 347 } },
            { action: "release" },
        ]);
        searchPage.firstAboutJobBTN.click()
        searchPage.jobSaveJobBTN.click()
        searchPage.jobSavedGoToJobsBTN.click()
        driver.pause(3000)
        assert(()=>{
            jobsPage.SavedJobsID.isExisting()==true
        }, "Job was not saved")

    })
    it("should Verify that a user can delete a saved job", ()=>{
        jobsPage.xSavedJob.click()
        driver.pause(3000)
        $('//android.widget.TextView[@text="Remove job"]').click()
        assert(()=>{
            jobsPage.SavedJobsID.isExisting()==false
        }, "saved job was not removed")
    })
    it("should Verify that a user can apply for a job", ()=>{
        bottomNav.search.click()
        bottomNav.search.click()
        const job = "designer"
        searchPage.searchInput.setValue(job)
        searchPage.searchBTN.click()
        driver.pause(3000)
        searchPage.companiesOrJobsToggle.click()
        searchPage.firstAboutJobBTN.click()
        searchPage.jobApplyNow.click()
        driver.pause(3000)
        searchPage.applicationSubmittedGoToJobsBTN.click()

    })
    it("should Verify that a user can see applied jobs", ()=>{
        assert(()=>{
            $('//android.widget.TextView[@text="My applications (2) or @text="My applications (1)"]').isExisting() == true
        }, "jobs were not applied to")
    })
})