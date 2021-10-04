module.exports =  class PO {
    constructor(x, y){
        this.x = x
        this.y = y
    }

    click(){
        driver.touchAction([{
            action: 'press',
            x:this.x,
            y:this.y
        }, 
        'release'
    ]);
    }
}