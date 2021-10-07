const data = require("../data/creds");
const myCulturePage = require("../pageobjects/create-profile/myCulturePage");
const myNamePage = require("../pageobjects/create-profile/myNamePage");
const myWorkStylePage = require("../pageobjects/create-profile/myWorkStylePage");
const skillsAndExperience = require("../pageobjects/create-profile/skillsAndExperience");
const landingPage = require("../pageobjects/landingPage");
const loginPage = require("../pageobjects/loginPage");
const registerPage = require("../pageobjects/registerPage");
const { tapXbtncreateprofile } = require("./general_functions");

const loginToYolba = ({user}) =>{
    switch(user){
        case "admin":{
            driver.pause(10000)
            landingPage.skipBTN.click()
            driver.pause(3000)
            driver.touchPerform([
                { action: "press", options: { x: 500, y: 1280 } },
                { action: "wait", options: { ms: 1000 } },
                { action: "moveTo", options: { x: 500, y: 347 } },
                { action: "release" },
            ]);
            driver.pause(3000);
            registerPage.loginOptBTN.click();
            //login
            loginPage.emailForm.setValue(data.UserEmail);
            loginPage.passwordForm.setValue(data.Password);
            loginPage.findMyTribeBTN.click();
            // tapping the XBTN
            driver.pause(6000)
            tapXbtncreateprofile()
            driver.pause(3000)
        }
        case "userWithProfile":{
          driver.pause(10000)
            landingPage.skipBTN.click()
            driver.pause(3000)
            driver.touchPerform([
                { action: "press", options: { x: 500, y: 1280 } },
                { action: "wait", options: { ms: 1000 } },
                { action: "moveTo", options: { x: 500, y: 347 } },
                { action: "release" },
            ]);
            driver.pause(3000);
            registerPage.loginOptBTN.click();
            //login
            loginPage.emailForm.setValue(data.userWithProfile);
            loginPage.passwordForm.setValue(data.Password);
            loginPage.findMyTribeBTN.click();
            // tapping the XBTN
            driver.pause(6000)
            tapXbtncreateprofile()
            driver.pause(3000)
        }
        default :
        break
    }
}
const createProfileProcess = () =>{
    myNamePage.firstNameForm.setValue(data.fname);
  myNamePage.lastNameForm.setValue(data.lname);
  myNamePage.nextBTN.click();

  myCulturePage.cultureOpt.click();
  myCulturePage.casualDressOpt.click();
  myCulturePage.clearValuesOpt.click();
  myCulturePage.saveAndExitBTN.click();
  myCulturePage.developmentOpt.click();
  myCulturePage.attendConferencesOpt.click();
  myCulturePage.crossFunctionalTrainingOpt.click();
  myCulturePage.saveAndExitBTN.click();
  myCulturePage.nextBTN.click();
  driver.pause(4000);
  //on my skills and experience page

  driver.touchPerform([
    { action: "press", options: { x: 500, y: 1280 } },
    { action: "wait", options: { ms: 1000 } },
    { action: "moveTo", options: { x: 500, y: 347 } },
    { action: "release" },
  ]);

  skillsAndExperience.addTechnicalBTN.click();
  driver.pause(8000);
  skillsAndExperience.dotNetOpt.click();
  skillsAndExperience.twoCheckoutOpt.click();
  skillsAndExperience.saveAndExitBtn.click();
  driver.pause(5000);
  skillsAndExperience.addLeadershipBTN.click();
  driver.pause(8000);
  skillsAndExperience.budgetsOpt.click();
  skillsAndExperience.businessOpt.click();
  skillsAndExperience.saveAndExitBtn.click();
  driver.pause(5000);
  skillsAndExperience.nextBtn.click();

  //go to my work style page

  myWorkStylePage.hybridOpt.click();
  driver.touchPerform([{ action: "tap", options: { x: 800, y: 1000 } }]);
  myWorkStylePage.within5MilesOpt.click();
  myWorkStylePage.officeLocationSaveBTN.click();
  myWorkStylePage.contractFulltimeOpt.click();
  driver.touchPerform([
    { action: "press", options: { x: 500, y: 1280 } },
    { action: "wait", options: { ms: 1000 } },
    { action: "moveTo", options: { x: 500, y: 100 } },
    { action: "release" },
  ]);
  myWorkStylePage.entrylevelOpt.click();
  driver.pause(3000);
  driver.touchPerform([{ action: "tap", options: { x: 174, y: 855 } }]);
  myWorkStylePage.poundOpt.click();
  myWorkStylePage.minsalaryPerYearSaveBTN.click();
  driver.pause(2000);
  driver.touchPerform([{ action: "tap", options: { x: 995, y: 855 } }]);

  myWorkStylePage.minsalaryPerYearOpt.click();
  myWorkStylePage.minsalaryPerYearSaveBTN.click();
  myWorkStylePage.minsalaryPerYearForm.setValue(1000);
  myWorkStylePage.companySizeoneToFifty.click();
  myWorkStylePage.nextBTN.click();
  driver.pause(4000)
}
    module.exports = {loginToYolba, createProfileProcess}