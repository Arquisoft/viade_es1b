import React from "react";
import auth from "solid-auth-client";
import SolidFileClient from "solid-file-client";

class DownloadComponent extends React.Component {

    constructor(){
        super();
        this.state = {
         sfc: new SolidFileClient(auth)
        };
        // Bind es necesario para usar el this
        this.bajarRutaDePod=this.bajarRutaDePod.bind(this);
    }

    async bajarRutaDePod(){
        //Dandole al boton se obtendria los contenidos del fichero               
        const ejemplo = await this.state.sfc.readFile( "https://uo265135.inrupt.net/public/index.html");
        alert("Fichero obtenido en consola");
        console.log(ejemplo);
    }

    render() {

    return(
        // La parte visible de la interfaz
        <div>
            <button onClick={this.bajarRutaDePod} > Bajar Ruta </button>
        </div>

     );
    }
}

export default DownloadComponent;