const { assert } = require("chai")
const data = require("../../data/creds")

class PreviewPage{
    get editIcon(){
        return $$('//android.view.ViewGroup[@index="0"]')[0]
    }
    get nameField(){
        return $('//android.widget.TextView[@index="1"]')
    }

    checkIfNameIsEdited(){
        if(typeof this.nameField.getText() == String){
            assert(()=>{
                this.nameField.getText().tolowercase().split(" ")[0] ==data.fname
            }, "name is not modified")
        }else{
            throw "name is not modified"
        }
    }
}

module.exports = new PreviewPage()