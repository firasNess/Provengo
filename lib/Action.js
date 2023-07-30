const Actions=(function(){

    function e(type, name) {
        return bp.Event(type+" " + name, {
            type: type,
            name: name,
            lib: "ACTION"
        });
    }

    return {
        stage: function(discription){ return e("",discription ); },
        clickButton: function(button){ return e("תלחוץ על כפתור", button); },
        writeInTextField: function(textField){ return e("בשדה", textField); },
        operationNotReady: function(icon){ return e("אין אפשרות להשתמש בפעולת", icon); },
        gotErrorMessage : function(errorMsg){ return e("הודעת שגיאה", errorMsg); },
        pickOption : function(option){ return e("לבחור את", option); },
        writeText: function(text){ return e("לרשום", text); },
        currentStep: function(step){ return e("", step); },
        getInomation: function(){ return e("יפתח חלון מידע ", ""); },
        chooseFromDropDown: function(dropdownField){ return e("משדה", dropdownField); },
        fromRadioButoon:function(radioButton){ return e("מכפתור", radioButton); },
        clickOnRadioButton: function(radioButton){ return e(radioButton, "את הכפתור"); },
        fromImg:function(img){ return e("משדה תמונה", img); },
        uploadImg: function(imgToUpload){ return e("לעלות את ", imgToUpload); },
        getTextOfField: function(field){ return e("נקבל מידע של ה", field); },
        validField: function(field){ return e("יש אישור ל", field); },


        wakeUp: function(){ return e("wake up", ""); },
        wear: function(what){ return e("wear", what); },
        eat: function(what){ return e("eat", what); },
        brushTeeth: function(){ return e("brush teeth", ""); },
        tidyUp: function(){ return e("tidy up", ""); },
        goOut: function(){ return e("goOut", ""); },
        backToSleep: function(){ return e("Sleep Again", ""); },
        fail: function(what){ return e("fail: ", what);},
        any: bp.EventSet("Any Action", function(e){
            return isEvent(e) && (e.data) && (e.data.lib==="ACTION");
        })
    };
})();