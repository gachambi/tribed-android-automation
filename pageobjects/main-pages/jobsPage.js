const PO = require("../po")

class JobsPage {
    get identifier(){ return $('//android.widget.TextView[@text="My jobs"]')}
    get startMySearchBTN(){return new PO(585, 890)}
    get startMySearchBTN2(){return new PO(550, 1500)}
}

module.exports = new JobsPage()