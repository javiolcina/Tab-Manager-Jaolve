    const addDIV = async () => {
        //Creating Elements. Div with class
        var div1 = document.createElement("DIV")
        div1.className = "flotant";
        div1.setAttribute("id", "flotatantDIV");
        var div2 = document.createElement("DIV");
        div1.appendChild(div2);

        //Enviar un missatge al background per obtidre el nom de la finestra i el color

        const newContent = document.createTextNode("Javier Olcina");
        //const newContent2 = document.createTextNode(current.id);
        
        div1.appendChild(newContent);


        //Appending to DOM 
        document.body.appendChild(div1);
    };
    
    void addDIV();