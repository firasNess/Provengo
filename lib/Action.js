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
        openApp: function(){ return e("לפתוח את האפליקציה", ""); },
        writeInTextField: function(textField){ return e("בשדה", textField); },
        gotMessage : function(msg){ return e("התקבלה הודעה", msg); },
        pickOption : function(option){ return e("לבחור את", option); },
        writeText: function(text){ return e("לרשום", text); },
        getInomation: function(){ return e("יפתח חלון מידע ", ""); },
        chooseFromDropDown: function(dropdownField){ return e("משדה", dropdownField); },
        fromRadioButoon:function(radioButton){ return e("מכפתור", radioButton); },
        clickOnRadioButton: function(radioButton){ return e(radioButton, "את הכפתור"); },
        fromImg:function(img){ return e("משדה תמונה", img); },
        uploadImg: function(imgToUpload){ return e("לעלות את ", imgToUpload); },
        getTextOfField: function(field){ return e("התקבל מידע של ה", field); },
        validField: function(field){ return e("יש אישור ל", field); },
        typeTicket: function(){ return e("לרשום דוח", ""); },
        fail: function(what){ return e("fail: ", what);},
        any: bp.EventSet("Any Action", function(e){
            return isEvent(e) && (e.data) && (e.data.lib==="ACTION");
        })
    };
})();