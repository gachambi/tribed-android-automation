class RegisterPage{
    get firstNameInput(){return $('//android.widget.EditText[@index="3"]')}
    get lastNameInput(){return $('//android.widget.EditText[@index="5"]')}
    get emailInput(){return $('//android.widget.EditText[@index="7"]')}
    get passwordInput(){return $('//android.widget.EditText[@index="0"]')}
    get findMyTribeBTN(){return $('//android.widget.TextView[@text="Find my tribe"]')}
    get loginOptBTN(){return $('//android.widget.TextView[@text="Log in"]')}
    // get (){return $('//')}
}

module.exports = new RegisterPage()