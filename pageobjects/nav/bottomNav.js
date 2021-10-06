class BottomNav {
    get discover(){ return $('//android.widget.TextView[@text="Discover"]')}
    get search(){ return $('//android.widget.TextView[@text="Search"]')}
    get jobs(){ return $('//android.widget.TextView[@text="Jobs"]')}
    get messages(){ return $('//android.widget.TextView[@text="Messages"]')}
}

module.exports = new BottomNav()