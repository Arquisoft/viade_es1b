import React from "react";
import  useWebId  from "@inrupt/solid-react-components";

class UploadComponent extends React.Component {



    constructor(){
        super();
        //Instanciamos la variable, con let
        let files; //Estos son los ficheros, con file[0] accederíamos al primero, que es nuestro caso.
        //Esto nos da la información del usuario:
        const webId = useWebId(); //Si no está logeado da null
    }


    //Esto es lo que hacemos cuando llamamos al método.
    itemHandler(parameter){
        alert("Está funcionando");
        this.files = parameter.target.files
    };

    render() {

    return(
        //Tras coger el item funciona el botón:
        <input type="file" onChange={this.itemHandler}/>

     );
    }
}

export default UploadComponent;