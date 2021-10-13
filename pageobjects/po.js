module.exports =  class PO {
    PO(x, y){
        this.x = x
        this.y = y
    }

    click(){
        driver.pause(2500)
        driver.touchAction([{
            action: 'press',
            x:this.x,
            y:this.y
        }, 
        'release'
    ]);
    }
}