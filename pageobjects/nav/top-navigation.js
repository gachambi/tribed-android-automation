const PO = require("../po");

class TopNav {
  get profile() {
    return new PO(105, 135);
  }
  get logoYolba() {
    return new PO(550, 135);
  }
  get notificationOpt(){
    return new PO(975, 135)
  }
}

module.exports = new TopNav();
