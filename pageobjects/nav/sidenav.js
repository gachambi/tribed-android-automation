const PO = require("../po")

class Sidenav {
  get createProfileBTN() {
    return new PO(480, 418)
  }
  get companiesIFollowBTN() {
    return new PO(410, 735)
  }
  get companyRevealsBTN() {
    return new PO(395, 840)
  }
  get termsAndConditions() {
    return new PO(230, 1440)
  }
  get logoutBTN() {
    return new PO(170, 1645)
  }
}

module.exports = new Sidenav();
