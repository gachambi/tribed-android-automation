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

}

module.exports = new SearchPage()