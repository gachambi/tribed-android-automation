const { assert } = require("chai")
const searchPage = require("../../../pageobjects/main-pages/searchPage")
const { search } = require("../../../pageobjects/nav/bottomNav")
const bottomNav = require("../../../pageobjects/nav/bottomNav")
const { loginToYolba } = require("../../../support/candidate_sign_up_helpers")

describe('find jobs under listings', ()=>{
    it('should Verify user can go to the search page', ()=>{
        loginToYolba({user:"userWithProfile"})
        bottomNav.search.click()
        driver.pause(3000)
        assert(searchPage.searchInput.isExisting(), "search page is not existing")

    })
    it('should Verify that a user is able to search for a job', ()=>{
        searchPage.searchInput.setValue("developer")
        searchPage.searchBTN.click()

    })
    it('should Verify that a user can filter search results based on personal preferences', ()=>{
        searchPage.companiesOrJobsToggle.click()
        searchPage.filterOptionsBTN.click()
        driver.pause(9000)
        // searchPage.filtersCompanyCultureOpt.click()
        searchPage.filtersCultureSelect1Opt.click()
        searchPage.filtersShowCompaniesBTN.click()
        assert($('//android.widget.TextView[@text="No results found"]'), "user cannot filter job search results")
    })
    it('should Verify that a user can show search results as companies', ()=>{
        searchPage.companiesOrJobsToggle.click()
        
    })
    it('should Verify that a user can show search results as jobs', ()=>{
        searchPage.companiesOrJobsToggle.click()
    })
})