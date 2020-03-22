import React from "react";
import auth from "solid-auth-client";
import SolidFileClient from "solid-file-client";
import bajarRutas from "./bajarRutas";

class DownloadComponent extends React.Component {

    constructor(){
        super();
        this.state = {
         sfc: new SolidFileClient(auth),
         direccion: "",
         rutas: []
        };
        // Bind es necesario para usar el this
        this.obtenerCarpetaPod=this.obtenerCarpetaPod.bind(this);
    }

    obtenerCarpetaPod(parameter) {
        this.setState({direccion: parameter.target.value});
    };

    render() {

    return(
        // La parte visible de la interfaz
        // El () => es para que no salte automaticamente cada vez que cargue la pagina
        <div>
            <input type="text" onChange={this.obtenerCarpetaPod} placeholder="Escribe la direccion de su carpeta..."/>
            <button onClick={() => bajarRutas.bajarRutasDePod(this.state.direccion)} > Bajar Rutas </button>                   
        </div>
     );
    }
}

export default DownloadComponent;