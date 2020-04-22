import auth from "solid-auth-client";
import SolidFileClient from "solid-file-client";

class bajarRutas {

    constructor() {

        this.sfc = new SolidFileClient(auth);
        this.rutas = [];
        this.session = null;        
        this.tmpFolder = "";
    }

    async bajarRutasDePod(direccion) {
        let session = await auth.currentSession();
        var id = `${session.webId}`;
        this.rutas = [];
        this.tmpFolder = id.replace('/profile/card#me', '/public/temp');
        //Dandole al boton se obtendria los contenidos del fichero   
        if (direccion === "")
            alert("Escriba la carpeta donde almacena las rutas");
        else {
            // Leemos toda la carpeta
            try {
            let folder = await this.sfc.readFolder(direccion,null);
            // Leemos los ficheros
            const files = folder.files;
            console.log(files);
            var hayRutas = false;
            var totalRutas = 0;
            var rutasCargadas = 0;
            // Para cada fichero que sea json (o el formato que vaya a ser), lo recoge
            files.forEach( file => {
                if (file.type === "application/json") 
                    totalRutas++;
                });
            files.forEach(async file => {
                if (file.type === "application/json") {
                     //console.log(this.tmpFolder+"/"+file.name);
                    hayRutas = true;
                    let copiado = await this.sfc.copyFile(file.url,this.tmpFolder+"/"+file.name);
                        if(copiado) {
                        let cargado = this.loadJSon(this.tmpFolder+"/"+file.name);                        
                        if(cargado) {
                            rutasCargadas++;                        
                        }
                        }
                    }
                    if(totalRutas===rutasCargadas) {
                        this.sfc.deleteFolder(this.tmpFolder);
                    }
            });
                if(hayRutas) {
                    alert("Rutas bajandose")
                }
                else {
                    alert("No hay rutas");
                }            
            } catch(error) {
                console.log(error);
                alert("No se ha podido encontrar la carpeta en su POD");
            }
        }
    }

    // Metodo auxiliar para obtener el objeto json
    async loadJSon(url) {   
            var Httpreq = new XMLHttpRequest(); // Solicitud
            Httpreq.open("GET", url, false);
            Httpreq.send(null);
            //console.log(Httpreq.responseText);
            var jsonRuta = JSON.parse(Httpreq.responseText);
            console.log(jsonRuta);
            this.rutas.push(jsonRuta);         
        }
    
}

export default bajarRutas = new bajarRutas();