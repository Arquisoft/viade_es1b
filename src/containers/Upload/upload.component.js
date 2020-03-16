import React from "react";
import auth from "solid-auth-client"

class UploadComponent extends React.Component {
    constructor(){
        super();
        //Instanciamos la variable, con let
        this.state = {
            //Estos son los ficheros, con file[0] accederíamos al primero, que es nuestro caso.
            files: null,
            direccion: "https://colourlesspawn.solid.community/public/"
        };
        //Bindeamos porque vamos a interactuar con files:
        this.itemHandler=this.itemHandler.bind(this);
        this.subirFicheroAPod=this.subirFicheroAPod.bind(this);
    }

    //Esto es lo que hacemos cuando llamamos al método.
    itemHandler(parameter){
        alert("Está funcionando");
        this.setState({files: parameter.target.files});
    };

    async subirFicheroAPod(){
        //Analizamos si está loggeado:
        let session = await auth.currentSession();
        if (!session){
            alert("No estás loggeado");
            if (this.files!=null){
                //Si el fichero es nulo:
                alert("No has seleccionado ningún fichero")
            }
            else{

            }
        }
        else {
            alert("Estás loggeado");
        }
    }

    render() {

    return(
        //Tras coger el item funciona el botón:
        <div>
            <input type="file" onChange={this.itemHandler}/>
            <button onClick={this.subirFicheroAPod} > Click me </button>
        </div>

     );
    }
}

export default UploadComponent;