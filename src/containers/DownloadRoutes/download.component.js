import React from "react";
import auth from "solid-auth-client";
import SolidFileClient from "solid-file-client";

class DownloadComponent extends React.Component {

    constructor(){
        super();
        this.state = {
         sfc: new SolidFileClient(auth),
         direccion: ""
        };
        // Bind es necesario para usar el this
        this.bajarRutasDePod=this.bajarRutasDePod.bind(this);
        this.obtenerCarpetaPod=this.obtenerCarpetaPod.bind(this);
    }

    obtenerCarpetaPod(parameter) {
        this.setState({direccion: parameter.target.value});
    };

    async bajarRutasDePod(){
        //Dandole al boton se obtendria los contenidos del fichero   
        if(this.state.direccion === "")            
            alert("No ha escrito nada")
            else {
        // Leemos toda la carpeta
        const folder = await this.state.sfc.readFolder( this.state.direccion);
        console.log(folder);
        // Leemos los ficheros
        const files = folder.files;
        console.log(files);
        // Para cada fichero que sea json (o el formato que vaya a ser), lo muestra
        var ficherosJson = [];
        files.forEach(file => {
            if(file.type==="application/json") {
                ficherosJson.push(file.url);
            console.log(ficherosJson[0]);
        }        
        });
        if(ficherosJson.length==0) {
            alert("No hay ficheros de rutas");
        }
        }
    }

    render() {

    return(
        // La parte visible de la interfaz
        <div>
            <input type="text" onChange={this.obtenerCarpetaPod} placeholder="Escribe la direccion de su carpeta..."/>
            <button onClick={this.bajarRutasDePod} > Bajar Ruta </button>            
        </div>
     );
    }
}

export default DownloadComponent;