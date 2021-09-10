const { assert } = require("chai");

class MyNamePage {
  get identifier() {
    return $('//android.widget.TextView[@text="My Name"]');
  }
  get firstNameForm() {
    return $('//android.widget.EditText[@index="6"]');
  }
  get lastNameForm() {
    return $('//android.widget.EditText[@index="8"]');
  }
  get nextBTN() {
    return $('//android.widget.TextView[@text="Next"]');
  }

  checkpage() {
    if (!this.identifier.isExisting()) {
      throw "not on checkpage";
    }
  }
}

module.exports = new MyNamePage();
