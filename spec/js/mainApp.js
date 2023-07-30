// @provengo summon constraints

bthread("main", function(){

    request(Actions.stage("לפתוח את האפליקציה"));


    let operationIcon = choose("חינה", "פיקוח");
    
        if (operationIcon === "חינה"){
            request(Actions.clickButton("חינה"));
            let option = choose("דוח חניה חדש", "דוחות אחרונים")
            
            if (option === "דוח חניה חדש") {
                
                    request(Actions.writeInTextField("סמל רישוי"));
                    request(Actions.writeText("332796182"));
                    if (maybe("מספר הרכב תקין")){
                        
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
                        request(Actions.clickButton( "מידע נוסף"));
                        request(Actions.getInomation());
                    }

                    request(Actions.clickButton("המשך"));
                    request(Actions.getTextOfField("יצרן"));
                    request(Actions.getTextOfField("סוג רכב"));
                    request(Actions.getTextOfField("שנת יצור"));
                    request(Actions.getTextOfField("צבע"));
                            
                    if (maybe("למלא את השדות")){
                        processOfTicket();
                        request(Actions.clickButton("המשך"));
                        request(Actions.getInomation());
                        request(Actions.clickButton("אישור"));
                    } else {
                        request(Actions.clickButton("המשך"));
                        request(Actions.gotErrorMessage("!חובה למלא השדות"));
                    }

                    } else {
                    request(Actions.gotErrorMessage("מספר רכב לא תקין"));
                    }
                } 
        } else if (operationIcon === "פיקוח") {
            request(Actions.clickButton("פיקוח"));
            request(Actions.operationNotReady("פיקוח"));
        }
});


function processOfTicket (){
    request(Actions.writeInTextField("ביקורת"));
    request(Actions.writeText("23"));

    request(Actions.writeInTextField("מספר דוח"));
    request(Actions.writeText("123"));

    request(Actions.stage("שלב נוכחי פרטי אירוע"));

    request(Actions.chooseFromDropDown("סעיף"));
    request(Actions.pickOption("1"));

    request(Actions.chooseFromDropDown("הערה מובנית"));
    request(Actions.pickOption("אין"));

    request(Actions.chooseFromDropDown("שיטת מסירה"));
    request(Actions.pickOption("רגיל"));

    request(Actions.stage("שלב נוכחי מיקום אירוע"));

    request(Actions.writeInTextField("רחוב"));
    request(Actions.writeText("דניאל"));

    request(Actions.writeInTextField("מספר בית"));
    request(Actions.writeText("1"));
    
    request(Actions.writeInTextField("שכונה"));
    request(Actions.writeText("מורשה"));

    request(Actions.fromRadioButoon("ציבורי"));
    request(Actions.clickOnRadioButton("להדליק"));

    request(Actions.chooseFromDropDown("ליד/מול"));
    request(Actions.pickOption("ליד"));

    request(Actions.writeInTextField("תאור המקום"));
    request(Actions.writeText("כלום"));

    request(Actions.stage("שלב נוכחי אירוע חניה"));

    request(Actions.fromImg("תמונת תמרור"));
    request(Actions.writeText("תמונה אישית"));

    request(Actions.fromImg("תמונת חניה"));
    request(Actions.writeText("תמונה לרכב"));

    request(Actions.writeInTextField("הערות"));
    request(Actions.writeText("אין"));
}


// function processOfTicket (){
//     request(Actions.stage("שלב נוכחי פרטי אירוע"));

//     if (maybe("למלא את סעיף")){
//         request(Actions.chooseFromDropDown("סעיף"));
//         request(Actions.pickOption("1"));
//     } else {
//         request(Actions.gotErrorMessage("חובה למלא את השדה"));
//     }

//     if (maybe("למלא את הערה מובנית")){
//         request(Actions.chooseFromDropDown("הערה מובנית"));
//         request(Actions.pickOption("אין"));
//     } else {
//         request(Actions.gotErrorMessage("חובה למלא את השדה"));
//     }

//     request(Actions.stage("שלב נוכחי מיקום אירוע"));

//     if (maybe("למלא את שיטת מסירה")){
//         request(Actions.chooseFromDropDown("שיטת מסירה"));
//         request(Actions.pickOption("רגיל"));
//     } else {
//         request(Actions.gotErrorMessage("חובה למלא את השדה"));
//     }

//     if (maybe("למלא את רחוב")){
//         request(Actions.writeInTextField("רחוב"));
//         request(Actions.writeText("דניאל"));
//     } else {
//         request(Actions.gotErrorMessage("חובה למלא את השדה"));
//     }

//     if (maybe("למלא את מספר בית")){
//         request(Actions.writeInTextField("מספר בית"));
//         request(Actions.writeText("1"));
//     } else {
//         request(Actions.gotErrorMessage("חובה למלא את השדה"));
//     }

//     if (maybe("למלא את שכונה ")){
//         request(Actions.writeInTextField("שכונה"));
//         request(Actions.writeText("מורשה"));
//     } else {
//         request(Actions.gotErrorMessage("חובה למלא את השדה"));
//     }

//     if (maybe("למלא את ציבורי ")){
//         request(Actions.fromRadioButoon("ציבורי"));
//         request(Actions.clickOnRadioButton("להדליק"));
//     } else {
//         request(Actions.gotErrorMessage("חובה למלא את השדה"));
//     }

//     if (maybe("למלא את מול/ליד ")){
//         request(Actions.chooseFromDropDown("ליד/מול"));
//         request(Actions.pickOption("ליד"));
//     } else {
//         request(Actions.gotErrorMessage("חובה למלא את השדה"));
//     }

//     request(Actions.stage("שלב נוכחי אירוע חניה"));

//     if (maybe(" למלא את תאור המקום ")){
//         request(Actions.writeInTextField("תאור המקום"));
//         request(Actions.writeText("כלום"));
//     } else {
//         request(Actions.gotErrorMessage("חובה למלא את השדה"));
//     }

//     if (maybe(" למלא את תמונת תמרור ")){
//         request(Actions.fromImg("תמונת תמרור"));
//         request(Actions.writeText("תמונה אישית"));
//     } else {
//         request(Actions.gotErrorMessage("חובה למלא את השדה"));
//     }

//     if (maybe(" למלא את תמונת חניה ")){
//         request(Actions.fromImg("תמונת חניה"));
//         request(Actions.writeText("תמונה לרכב"));
//     } else {
//         request(Actions.gotErrorMessage("חובה למלא את השדה"));
//     }

//     if (maybe(" למלא את הערות ")){
//         request(Actions.writeInTextField("הערות"));
//         request(Actions.writeText("אין"));
//     } else {
//         request(Actions.gotErrorMessage("חובה למלא את השדה"));
//     }

// }

