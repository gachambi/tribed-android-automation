const PO = require("../po")

class SearchPage {
    get searchInput(){return $('//android.widget.EditText[@index="0"]')}
    get searchBTN(){return new PO(850,680)}
    get companiesOrJobsToggle(){return new PO(540, 420)}
    get filterOptionsBTN(){return new PO(550, 1450)}
    get filtersXBTN(){return new PO(960,345)}
    get filtersCompanyCultureOpt(){return $('//android.widget.TextView[@text="Company culture"]')}
    get filtersWorkstyleOpt(){return $('//android.widget.TextView[@text="Workstyle"]')}
    get filtersSkillsAndExperienceOpt(){return $('//android.widget.TextView[@text="Skills & experience"]')}
    get filtersShowCompaniesBTN(){return new PO(550, 1600)}
    get filtersCultureSelect1Opt(){return new PO(200,1200)}
    get matchingJobsText(){return $('//android.widget.TextView[@text="We found 13 matching jobs" or @text="We found 5 matching companies"]')}
    get firstAboutJobBTN(){return $$('//android.widget.TextView[@text="About the job"]')[0]}
    get jobSaveJobBTN(){return $('//android.widget.TextView[@text="Save job"]')}
    get jobApplyNow(){return $('//android.widget.TextView[@text="Apply now"]')}
    get jobSavedDoneBTN(){return $('//android.widget.TextView[@text="Done"]')}
    get jobSavedGoToJobsBTN(){return $('//android.widget.TextView[@text="Go to my jobs"]')}
    get applicationSubmittedDoneBTN(){return $('//android.widget.TextView[@text="Done"]')}
    get applicationSubmittedGoToJobsBTN(){return $('//android.widget.TextView[@text="Go to my jobs"]')}
    
}

module.exports = new SearchPage()