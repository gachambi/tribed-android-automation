class MyFilesAndLinks {
  get previewBTN() {
    return $('//android.widget.TextView[@text="Preview"]');
  }
}

module.exports = new MyFilesAndLinks();
