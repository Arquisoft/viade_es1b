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
        //Dandole al boton se baja el fichero        
        
        const ejemplo = await this.state.sfc.fetch( "https://uo265135.inrupt.net/public/index.html");
        alert("Fichero obtenido");
        console.log(ejemplo);
    }

    render() {

    return(
        //Tras coger el item funciona el botón:
        <div>
            <button onClick={this.bajarRutaDePod} > Bajar Ruta </button>
        </div>

     );
    }
}

export default DownloadComponent;