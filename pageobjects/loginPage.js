class LoginPage {
  get emailForm() {
    return $('//android.widget.EditText[@index="3"]');
  }
  get passwordForm() {
    return $('//android.widget.EditText[@index="0"]');
  }
  get registerNowBTN() {
    return $('//android.widget.TextView[@text="Register now"]');
  }
  get findMyTribeBTN() {
    return $('//android.view.ViewGroup[@index="7"]');
  }
}

module.exports = new LoginPage();
