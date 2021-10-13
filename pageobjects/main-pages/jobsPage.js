const PO = require("../po")

class JobsPage {
    get identifier(){ return $('//android.widget.TextView[@text="My jobs"]')}
    get startMySearchBTN(){return new PO(585, 890)}
    get startMySearchBTN2(){return new PO(550, 1500)}
    get SavedJobsID(){return $('//android.widget.TextView[@text="My saved jobs (1)"]')}
    get xSavedJob(){return new PO(736,670)}
}

module.exports = new JobsPage()