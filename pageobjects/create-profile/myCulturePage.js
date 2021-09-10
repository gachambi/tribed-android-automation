class MyCulturePage {
  get idetntifier() {
    return $("");
  }
  get cultureOpt() {
    return $('//android.widget.TextView[@text="Add to culture"]');
  }
  //culture opts
  get casualDressOpt() {
    return $('//android.widget.TextView[@text="Casual Dress"]');
  }
  get clearValuesOpt() {
    return $('//android.widget.TextView[@text="Clear Values"]');
  }
  get clearVisionOpt() {
    return $('//android.widget.TextView[@text="Clear Vision And Mission"]');
  }
  get collaborativeWorkingOpt() {
    return $('//android.widget.TextView[@text="Collaborative Working"]');
  }
  get diversityOpt() {
    return $(
      '//android.widget.TextView[@text="Commited To Diversity And Inclusion"]'
    );
  }

  get developmentOpt() {
    return $('//android.widget.TextView[@text="Add to development"]');
  }
  //development opts
  get attendConferencesOpt() {
    return $('//android.widget.TextView[@text="Attend Conferences"]');
  }
  get crossFunctionalTrainingOpt() {
    return $('//android.widget.TextView[@text="Cross Functional Training"]');
  }
  get diversityTrainingOpt() {
    return $('//android.widget.TextView[@text="Diversity Training"]');
  }
  get emotionalIntelligenceTrainingOpt() {
    return $(
      '//android.widget.TextView[@text="Emotional Intelligence Training"]'
    );
  }

  get wellBeingOpt() {
    return $('//android.widget.TextView[@text="Add to well-being"]');
  }
  get benefitOpt() {
    return $('//android.widget.TextView[@text="Add to benefits"]');
  }
  get xBTN() {
    return $('//android.view.ViewGroup[@index="0"]');
  }
  get backBTN() {
    return $('//android.widget.TextView[@text="Back"]');
  }
  get nextBTN() {
    return $('//android.widget.TextView[@text="Next"]');
  }
  get saveAndExitBTN() {
    return $('//android.widget.TextView[@text="Save and exit"]');
  }
}

module.exports = new MyCulturePage();
