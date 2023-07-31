// @provengo summon constraints

bthread("main", function(){

    request(Actions.openApp());
    checkConnection();
    
        let operationIcon = choose("חינה", "פיקוח");

        if (operationIcon === "חינה"){
            checkConnection();
            request(Actions.clickButton("חינה"));
            let option = choose("דוח חניה חדש", "דוחות אחרונים")
            checkConnection();
            if (option === "דוח חניה חדש") {
                    checkConnection();
                    request(Actions.writeInTextField("סמל רישוי"));
                    request(Actions.writeText("332796182"));
                    checkConnection();
                    if (maybe("מספר הרכב תקין")){
                        checkConnection();
                        let baymentWay = choose("Pango", "CelloPark", "תו עירוני" ,"תו נכה", "כלום");

                        if (baymentWay === "Pango"){
                            request(Actions.validField("Pango"));
                        } else if (baymentWay === "CelloPark"){
                            request(Actions.validField("CelloPark"));
                        } else if (baymentWay === "תו עירוני"){
                            request(Actions.validField("תו עירוני"));
                        } else if (baymentWay === "תו נכה"){
                        request(Actions.validField("תו נכה"));
                    } else {

                    }
                    if(maybe("ללחוץ על מידע נוסף")){
                        checkConnection();
                        request(Actions.clickButton( "מידע נוסף"));
                        request(Actions.getInomation());
                    }

                    checkConnection();
                    request(Actions.clickButton("המשך"));
                    checkConnection();
                    request(Actions.getTextOfField("יצרן"));
                    request(Actions.getTextOfField("סוג רכב"));
                    request(Actions.getTextOfField("שנת יצור"));
                    request(Actions.getTextOfField("צבע"));
                    checkConnection();
                    processOfTicket();
                    request(Actions.clickButton("המשך"));
                    request(Actions.getInomation());

                    request(Actions.clickButton("אישור"));
                    request(Actions.stage("יפתח חלון הדפסה"));
                    request(Actions.clickButton("Cancel"));

                    
                    request(Actions.fromImg("הוספת תמונת דוח על שמשת הרכב"));
                    request(Actions.uploadImg("תמונת הרכב"));


                    } else {
                    bp.ASSERT(false,"מספר רכב לא תקין");
                    }
                } 
        } else if (operationIcon === "פיקוח") {
            bp.ASSERT(false, "אין אפשרות להשתמש בפעילות פיקוח");
        }
});


function processOfTicket (){

    if (maybe("למלא את ביקורת")){
        checkConnection();
        request(Actions.writeInTextField("ביקורת"));
        request(Actions.writeText("23"));
    } else {
        request(Actions.fail("חובה למלא את שדה ביקורת"));
    }


    if (maybe("למלא את מספר דוח")){
        checkConnection();
        request(Actions.writeInTextField("מספר דוח"));
        request(Actions.writeText("123"));
    } else {
        request(Actions.fail(" חובה למלא את שדה מספר דוח"));
    }

    if (maybe("למלא את סעיף")){
        checkConnection();
        request(Actions.chooseFromDropDown("סעיף"));
        request(Actions.pickOption("1"));
    } else {
        request(Actions.fail("חובה למלא את שדה השדה"));
    }

    if (maybe("למלא את הערה מובנית")){
        checkConnection();
        request(Actions.chooseFromDropDown("הערה מובנית"));
        request(Actions.pickOption("אין"));
    } else {
        request(Actions.fail("חובה למלא את שדה השדה"));
    }


    if (maybe("למלא את שיטת מסירה")){
        checkConnection();
        request(Actions.chooseFromDropDown("שיטת מסירה"));
        request(Actions.pickOption("רגיל"));
    } else {
        request(Actions.fail("חובה למלא את שדה השדה"));
    }

    if (maybe("למלא את רחוב")){
        checkConnection();
        request(Actions.writeInTextField("רחוב"));
        request(Actions.writeText("דניאל"));
    } else {
        request(Actions.fail("חובה למלא את שדה השדה"));
    }

    if (maybe("למלא את מספר בית")){
        checkConnection();
        request(Actions.writeInTextField("מספר בית"));
        request(Actions.writeText("1"));
    } else {
        request(Actions.fail("חובה למלא את שדה השדה"));
    }

    if (maybe("למלא את שכונה ")){
        checkConnection();
        request(Actions.writeInTextField("שכונה"));
        request(Actions.writeText("מורשה"));
    } else {
        request(Actions.fail("חובה למלא את שדה השדה"));
    }

    if (maybe("למלא את ציבורי ")){
        checkConnection();
        request(Actions.fromRadioButoon("ציבורי"));
        request(Actions.clickOnRadioButton("להדליק"));
    } else {
        request(Actions.fail("חובה למלא את שדה השדה"));
    }

    if (maybe("למלא את מול/ליד ")){
        checkConnection();
        request(Actions.chooseFromDropDown("ליד/מול"));
        request(Actions.pickOption("ליד"));
    } else {
        request(Actions.fail("חובה למלא את השדה"));
    }

    if (maybe(" למלא את תאור המקום ")){
        checkConnection();
        request(Actions.writeInTextField("תאור המקום"));
        request(Actions.writeText("כלום"));
    } else {
        request(Actions.fail("חובה למלא את שדה השדה"));
    }

    if (maybe(" למלא את תמונת תמרור ")){
        checkConnection();
        request(Actions.fromImg("תמונת תמרור"));
        request(Actions.writeText("תמונה אישית"));
    } else {
        request(Actions.fail("חובה למלא את שדה השדה"));
    }

    if (maybe(" למלא את תמונת חניה ")){
        checkConnection();
        request(Actions.fromImg("תמונת חניה"));
        request(Actions.writeText("תמונה לרכב"));
    } else {
        request(Actions.fail("חובה למלא את שדה השדה"));
    }

    if (maybe(" למלא את הערות ")){
        checkConnection();
        request(Actions.writeInTextField("הערות"));
        request(Actions.writeText("אין"));
    } else {
        request(Actions.fail("חובה למלא את שדה השדה"));
    }

}

function checkConnection(){
    if (maybe("מחובר לאינטרנט")){
        request(Actions.gotMessage("בוצע חיבור תקין"))
    } else {
        bp.ASSERT(false,"יש בעיה בחיבור לאינטרנט");    
    }
}
