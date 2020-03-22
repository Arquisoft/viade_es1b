import auth from "solid-auth-client";
import SolidFileClient from "solid-file-client";

class bajarRutas {

    constructor(){

         this.sfc= new SolidFileClient(auth);
         this.rutas= [];
    }

async bajarRutasDePod(direccion){
    //Dandole al boton se obtendria los contenidos del fichero   
    if(direccion === "")            
        alert("No ha escrito nada")
        else {
    // Leemos toda la carpeta
    const folder = await this.sfc.readFolder( direccion);
    console.log(folder);
    // Leemos los ficheros
    const files = folder.files;
    console.log(files);
    var ficherosRuta = [];
    // Para cada fichero que sea json (o el formato que vaya a ser), lo muestra
    files.forEach(file => {
        if(file.type==="application/json") {
            this.rutas.push(file.url);
            ficherosRuta.push(file.url);
        console.log(this.rutas);
    }        
    });
    if(this.rutas.length==0) {
        alert("No hay ficheros de rutas");
    }
    else {
        alert("Rutas bajadas");
        return ficherosRuta;
    }
    }
}
}

export default bajarRutas = new bajarRutas();