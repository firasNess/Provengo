// @provengo summon constraints

bthread("main", function(){

    request(Actions.openApp());
    checkConnection();
    
        let operationIcon = choose("חניה", "פיקוח");

        if (operationIcon === "חניה"){
            checkConnection();
            request(Actions.clickButton("חינה"));
            let option = choose("דוח חניה חדש", "דוחות אחרונים")
            if (option === "דוח חניה חדש") {
                    checkConnection();
                    request(Actions.writeInTextField("סמל רישוי"));
                    request(Actions.writeText("332796182"));
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
                    request(Actions.getTextOfField("יצרן"));
                    request(Actions.getTextOfField("סוג רכב"));
                    request(Actions.getTextOfField("שנת יצור"));
                    request(Actions.getTextOfField("צבע"));
                    processOfTicket();
                    request(Actions.clickButton("המשך"));
                    request(Actions.getInomation());

                    request(Actions.clickButton("אישור"));
                    request(Actions.stage("יפתח חלון הדפסה"));
                    request(Actions.clickButton("Cancel"));

                    
                    request(Actions.fromImg("הוספת תמונת דוח על שמשת הרכב"));
                    request(Actions.uploadImg("תמונת הרכב"));
                    request(Actions.typeTicket());



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
        bp.ASSERT(false, " חובה למלא את שדה ביקורת");
    }


    if (maybe("למלא את מספר דוח")){
        checkConnection();
        request(Actions.writeInTextField("מספר דוח"));
        request(Actions.writeText("123"));
    } else {
        bp.ASSERT(false, "חובה למלא את שדה מספר דוח");
    }

    if (maybe("למלא את סעיף")){
        checkConnection();
        request(Actions.chooseFromDropDown("סעיף"));
        request(Actions.pickOption("1"));
    } else {
        bp.ASSERT(false, "חובה למלא את שדה סעיף");
    }

    if (maybe("למלא את הערה מובנית")){
        checkConnection();
        request(Actions.chooseFromDropDown("הערה מובנית"));
        request(Actions.pickOption("אין"));
    } else {
        bp.ASSERT(false, "חובה למלא את שדה הערה מובנית");
        }


    if (maybe("למלא את שיטת מסירה")){
        checkConnection();
        request(Actions.chooseFromDropDown("שיטת מסירה"));
        request(Actions.pickOption("רגיל"));
    } else {
        bp.ASSERT(false, "חובה למלא את שדה שיטת מסירה");
    }

    if (maybe("למלא את רחוב")){
        checkConnection();
        request(Actions.writeInTextField("רחוב"));
        request(Actions.writeText("דניאל"));
    } else {
        bp.ASSERT(false, "חובה למלא את שדה רחוב");
    }

    if (maybe("למלא את מספר בית")){
        checkConnection();
        request(Actions.writeInTextField("מספר בית"));
        request(Actions.writeText("1"));
    } else {
        bp.ASSERT(false, "חובה למלא את שדה מספר בית");
    }

    if (maybe("למלא את שכונה ")){
        checkConnection();
        request(Actions.writeInTextField("שכונה"));
        request(Actions.writeText("מורשה"));
    } else {
        bp.ASSERT(false, "חובה למלא את שדה שכונה ");
    }

    if (maybe("למלא את ציבורי ")){
        checkConnection();
        request(Actions.fromRadioButoon("ציבורי"));
        request(Actions.clickOnRadioButton("להדליק"));
    } else {
        bp.ASSERT(false, "חובה למלא את שדה ציבורי");
    }

    if (maybe("למלא את מול/ליד ")){
        checkConnection();
        request(Actions.chooseFromDropDown("ליד/מול"));
        request(Actions.pickOption("ליד"));
    } else {
        bp.ASSERT(false, "חובה למלא את שדה מול/ליד ");
    }

    if (maybe(" למלא את תאור המקום ")){
        checkConnection();
        request(Actions.writeInTextField("תאור המקום"));
        request(Actions.writeText("כלום"));
    } else {
        bp.ASSERT(false, "חובה למלא את שדה תאור המקום");
    }

    if (maybe("למלא את תמונת תמרור ")){
        checkConnection();
        request(Actions.fromImg("תמונת תמרור"));
        request(Actions.writeText("תמונה אישית"));
    } else {
        bp.ASSERT(false, "חובה למלא את שדה תמונת תמרור");
    }

    if (maybe("למלא את תמונת חניה ")){
        checkConnection();
        request(Actions.fromImg("תמונת חניה"));
        request(Actions.writeText("תמונה לרכב"));
    } else {
        bp.ASSERT(false, "חובה למלא את שדה תמונת חניה");
    }

    if (maybe("למלא את הערות ")){
        checkConnection();
        request(Actions.writeInTextField("הערות"));
        request(Actions.writeText("אין"));
    } else {
        bp.ASSERT(false, "חובה למלא את שדה הערות");
    }

}

function checkConnection(){
    if (maybe("מחובר לאינטרנט")){
        request(Actions.gotMessage("בוצע חיבור תקין"))
    } else {
        bp.ASSERT(false,"יש בעיה בחיבור לאינטרנט");    
    }
}
