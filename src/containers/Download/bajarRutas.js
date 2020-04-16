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
                var rutas = false;
                // Para cada fichero que sea json (o el formato que vaya a ser), lo muestra
                files.forEach(file => {
                    if (file.type === "application/json") {
                        this.loadJSon(file.url, files);
                        if (!rutas)
                            rutas = true;
                    }
                });
            } catch (error) {
                alert("No se ha podido encontrar la carpeta en su POD");
            }
        }
    }

    // Metodo auxiliar para obtener el objeto json
    loadJSon(url, files) {
        var Httpreq = new XMLHttpRequest(); // Solicitud
        Httpreq.open("GET", url, false);
        Httpreq.send(null);
        var jsonRuta = JSON.parse(Httpreq.responseText);
        this.rutas.push(jsonRuta);
        if (this.rutas.length === files.length) {
            alert("Descarga Finalizada");
        }
        if (files.length === 0)
            alert("No hay rutas disponibles");
    }

}

export default bajarRutas = new bajarRutas();