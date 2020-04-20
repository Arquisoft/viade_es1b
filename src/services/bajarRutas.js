import auth from "solid-auth-client";
import SolidFileClient from "solid-file-client";
import { NotificationManager } from "react-notifications";

class bajarRutas {

    constructor() {

        this.sfc = new SolidFileClient(auth);
        this.rutas = [];
    }


    async bajarRutasDePod(direccion, exito, fallo, vacio, noruta) {
        this.rutas = [];
        //Dandole al boton se obtendria los contenidos del fichero   
        if (direccion === "")
            NotificationManager.error("", vacio, 3000);
        else {
            // Leemos toda la carpeta
            try {
                let folder = await this.sfc.readFolder(direccion);
                // Leemos los ficheros
                const files = folder.files;
                var rutas = false;
                // Para cada fichero que sea json (o el formato que vaya a ser), lo muestra
                files.forEach(file => {
                    if (file.type === "application/json") {
                        this.loadJSon(file.url, files, exito, noruta);
                        if (!rutas)
                            rutas = true;
                    }

                });
            } catch (error) {
                NotificationManager.error("", fallo, 3000);
            }
        }
    }

    // Metodo auxiliar para obtener el objeto json
    loadJSon(url, files, exito, noruta) {
        var Httpreq = new XMLHttpRequest(); // Solicitud
        Httpreq.open("GET", url, false);
        Httpreq.send(null);
        var jsonRuta = JSON.parse(Httpreq.responseText);
        this.rutas.push(jsonRuta);
        if (this.rutas.length === files.length) {
            NotificationManager.success("", exito, 3000);
        }
        if (files.length === 0)
            NotificationManager.error("", noruta, 3000);
    }
}

export default bajarRutas = new bajarRutas();