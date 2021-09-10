class MyWorkStylePage {
  get identifier() {
    return $('//android.widget.TextView[@text="My workstyle"]');
  }
  get hybridOpt() {
    return $('//android.widget.TextView[@text="Hybrid"]');
  }
  get officeLocationExpandBTN() {
    return $$('//android.widget.TextView[@index="0"]');
  }
  get officeLocationSaveBTN() {
    return $('//android.widget.TextView[@text="Save"]');
  }
  get within5MilesOpt() {
    return $('//android.widget.TextView[@text="Within 5 miles"]');
  }
  get contractFulltimeOpt() {
    return $('//android.widget.TextView[@text="Contract full-time"]');
  }
  get entrylevelOpt() {
    return $('//android.widget.TextView[@text="Entry-level"]');
  }
  get minSalaryLeft() {
    return $$('//android.widget.TextView[@index="0"]');
  }
  get minSalaryRight() {
    return $$('//android.widget.TextView[@index="0"]');
  }
  get minSalarySave() {
    return $('//android.widget.TextView[@text="Save"]');
  }
  get poundOpt() {
    return $('//android.widget.TextView[@text="£"]');
  }
  get minsalaryPerYearOpt() {
    return $('//android.widget.TextView[@text="Per year"]');
  }
  get minsalaryPerYearSaveBTN() {
    return $('//android.widget.TextView[@text="Save"]');
  }
  get minsalaryPerYearForm() {
    return $('//android.widget.EditText[@index="1"]');
  }
  get companySizeoneToFifty() {
    return $('//android.widget.TextView[@text="1-50"]');
  }
  get nextBTN() {
    return $('//android.widget.TextView[@text="Next"]');
  }
}

module.exports = new MyWorkStylePage();
