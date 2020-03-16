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
        //El archivo a subir será:
        let archivo = this.state.files[0];
        //Analizamos si está loggeado:
        let session = await auth.currentSession();
        if (!session){
            alert("No estás loggeado");
            if (this.state.files[0]!=null){
                //Si el fichero es nulo:
                alert("No has seleccionado ningún fichero")
        }
            else{
                //Vamos a mirar DONDE vamos a subir el archivo:
                let link = this.state.direccion;
                //Colocamos el nombre del archivo:
                link.concat(archivo.name);
                const res = await fc.createFile(url, strRoute, "text/turtle",{});

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