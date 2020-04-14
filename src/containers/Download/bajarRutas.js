import auth from "solid-auth-client";
import SolidFileClient from "solid-file-client";

class bajarRutas {

    constructor() {

        this.sfc = new SolidFileClient(auth);
        this.rutas = [];
    }

    async bajarRutasDePod(direccion) {
        this.rutas = [];
        //Dandole al boton se obtendria los contenidos del fichero   
        if (direccion === "")
            alert("Escriba la carpeta donde almacena las rutas");
        else {
            // Leemos toda la carpeta
            try {
                let folder = await this.sfc.readFolder(direccion);
                // Leemos los ficheros
                const files = folder.files;
                console.log(files);
                var rutas = false;
                // Para cada fichero que sea json (o el formato que vaya a ser), lo muestra
                files.forEach(file => {
                    if (file.type === "application/json") {
                        this.loadJSon(file.url);
                        //var jsonRuta = JSON.parse(this.loadJSon(file.url));
                        //this.rutas.push(jsonRuta);
                        if (!rutas)
                            rutas = true;
                    }
                });
                if (rutas) {
                    alert("Rutas bajandose")
                }
                else {
                    alert("No hay rutas");
                }
            } catch (error) {
                console.log(error);
                alert("No se ha podido encontrar la carpeta en su POD");
            }
        }
    }

    // Metodo auxiliar para obtener el objeto json
    async loadJSon(url) {
        let fileGet = await this.sfc.get(url);
        if (fileGet) {
            let jsonObj = await fetch(fileGet.url)
            if (jsonObj) {
                var Httpreq = new XMLHttpRequest(); // Solicitud
                Httpreq.open("GET", url, false);
                Httpreq.send(null);
                console.log(Httpreq.responseText);
                var jsonRuta = JSON.parse(Httpreq.responseText);
                this.rutas.push(jsonRuta);
            }
        }
    }

}

export default bajarRutas = new bajarRutas();