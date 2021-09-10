class SkillsAndExperience {
  get identifier() {
    return $('//android.widget.TextView[@text="My skills & experience"]');
  }
  get addTechnicalBTN() {
    return $('//android.widget.TextView[@text="Add technical"]');
  }
  //technical opts
  get dotNetOpt() {
    return $('//android.widget.TextView[@text="365"]');
  }
  get twoCheckoutOpt() {
    return $('//android.widget.TextView[@text="2Checkout"]');
  }

  get addLeadershipBTN() {
    return $('//android.widget.TextView[@text="Add leadership"]');
  }
  //leadership opts
  get budgetsOpt() {
    return $('//android.widget.TextView[@text="Budgets"]');
  }
  get businessOpt() {
    return $('//android.widget.TextView[@text="Business"]');
  }

  get addSelectorsBTN() {
    return $('//android.widget.TextView[@text="Add sectors"');
  }
  get addQualificationBTN() {
    return $('//android.widget.TextView[@text="Add qualifications"');
  }
  get backBTN() {
    return $('//android.widget.TextView[@text="Back"]');
  }
  get nextBtn() {
    return $('//android.widget.TextView[@text="Next"]');
  }
  get saveAndExitBtn() {
    return $('//android.widget.TextView[@text="Save and exit"]');
  }
}

module.exports = new SkillsAndExperience();
