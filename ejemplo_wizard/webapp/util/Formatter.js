sap.ui.define([], function (){
    'use strict';
    return{
       checkSize: function(alguito){   
        console.log(alguito)
        switch (alguito) {
            case alguito === "n/a":
                return "Ingrese un numero por favor";
        
            default:
                return "Aprobado";
        }
       }
    };
}, true)