import auth from "solid-auth-client";
import SolidFileClient from "solid-file-client";
import { NotificationManager } from "react-notifications";

class bajarRutas {

    constructor() {
        this.sfc = new SolidFileClient(auth);
        this.rutas = [];
        this.session = null;
        this.tmpFolder = "";
    }

    async bajarRutasDePod(direccion, exito, fallo, vacio, noruta) {
        let session = await auth.currentSession();
        var id = `${session.webId}`;
        this.rutas = [];
        this.tmpFolder = id.replace('/profile/card#me', '/public/temp');
        //Dandole al boton se obtendria los contenidos del fichero   
        if (direccion === "")
            NotificationManager.error("", vacio, 3000);
        else {
            // Leemos toda la carpeta
            try {
                let folder = await this.sfc.readFolder(direccion, null);
                // Leemos los ficheros
                const files = folder.files;
                var hayRutas = false;
                var totalRutas = 0;
                var rutasCargadas = 0;
                var rutasCopiadas = 0;
                // Para cada fichero que sea json (o el formato que vaya a ser), lo recoge
                files.forEach(file => {
                    if (file.type === "application/json")
                        totalRutas++;
                });
                files.forEach(async file => {
                    if (file.type === "application/json") {
                        hayRutas = true;
                        let copiado = await this.sfc.copyFile(file.url, this.tmpFolder + "/" + file.name);
                        if (copiado) {
                            //this.loadJSon(this.tmpFolder + "/" + file.name);
                            rutasCopiadas++;
                            console.log("copiadas: "+rutasCopiadas);
                            this.rutas.push(this.loadJSon(this.tmpFolder + "/" + file.name));
                            let eliminado = await this.sfc.deleteFile(this.tmpFolder + "/" + file.name);
                            if(eliminado) {
                                rutasCargadas++;
                                console.log("cargadas: "+rutasCargadas);
                            }
                            if (totalRutas === rutasCargadas) {
                                this.sfc.deleteFolder(this.tmpFolder);
                            }
                        }
                    }
                });                
                if (hayRutas) {
                    NotificationManager.error("", exito, 3000);
                } else {
                    NotificationManager.error("", noruta, 3000);
                }
            }            
            catch (error) {
                NotificationManager.error("", fallo, 3000);
            }
        }
    }

    // Metodo auxiliar para obtener el objeto json
    loadJSon(url, exito, noruta) {
        var Httpreq = new XMLHttpRequest(); // Solicitud
        Httpreq.open("GET", url, false);
        Httpreq.send(null);
        var jsonRuta = JSON.parse(Httpreq.responseText);
        return jsonRuta;
    }
}

export default bajarRutas = new bajarRutas();