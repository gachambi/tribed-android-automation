class TopNav {
  get profileAndNotificationOpt() {
    return $$('//android.view.ViewGroup[@index="0"]');
  }
  get logoOpt() {
    return $('//android.view.ViewGroup[@index="1"]');
  }
}

module.exports = TopNav();
