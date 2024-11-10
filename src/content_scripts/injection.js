
    var windowName = "";
    var windowColor = "";
    var FLOTANT_DIV_ID = "flotatantDIV";
    var FLOTANT_DIV_CLASS = "flotant";

    //Comunication with the background ////////////////////////////////////////////////////////////////

    /**
     * Listen for messages, from Background 
     * by jaolve
     */
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    //if (request.command === set_window_name) {
     
        console.log(request);
        windowName = request.windowName    ;
        windowColor = request.windowColor;
        console.log('windowName=' + windowName);
        console.log('windowColor=' + windowColor);
        void addDIVTicker();
        return;
    });

    //Enviar un missatge al background per obtidre el nom de la finestra i el color
    /*chrome.runtime.sendMessage({
            command: set_window_name
              }, (response) => {
                console.log(response);
                div1.style.backgroundColor = response.color;
    });*/            
    /////////////////////////////////////////////////////////////////////////////////////////////

   /**
    *   addDIVTicker 
    */ 
   const addDIVTicker = async () => {

        var set_window_name = "get_window_name";

        var divFlotant = document.getElementById(FLOTANT_DIV_ID);
        //exists element id = flotatantDIV
        if (divFlotant == null)
        {
            //Creating Elements. Div with class
            var div1 = document.createElement("DIV")
            
            div1.setAttribute("class", FLOTANT_DIV_CLASS);
            var div2 = document.createElement("DIV");
            div2.setAttribute("id", FLOTANT_DIV_ID);
            div1.appendChild(div2);
            const newContent = document.createTextNode(windowName);
            div2.appendChild(newContent);

            if (windowColor != "")
            {
                div2.className = windowColor;
            }

            //Appending to DOM 
            document.body.appendChild(div1);
        }
        else 
        {
            console.log('no existeix');
            //Modify the content of divFlotant  with windowName
            divFlotant.innerHTML = windowName;
            if (windowColor != "")
            {
                divFlotant.className = windowColor;
            }
        }
        
    };
    
    void addDIVTicker();


