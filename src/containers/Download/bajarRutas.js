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
            alert("No ha escrito nada")
        else {
            // Leemos toda la carpeta
            const folder = await this.sfc.readFolder(direccion);
            // console.log(folder);
            // Leemos los ficheros
            const files = folder.files;
            // console.log(files);
            // Para cada fichero que sea json (o el formato que vaya a ser), lo muestra
            files.forEach(file => {
                if (file.type === "application/json") {
                    var jsonObj = JSON.parse(this.loadJSon(file.url));
                    this.rutas.push(jsonObj);
                }
            });
            if (this.rutas.length === 0) {
                alert("No hay ficheros de rutas");
            }
            else {
                alert("Rutas bajadas");
                for (let i = 0; i < this.rutas.length; i++) {
                    alert(this.rutas[i]);
                }
                return this.rutas;
            }
        }
    }

    // Metodo auxiliar para obtener el objeto json
    loadJSon(url) {
        var Httpreq = new XMLHttpRequest(); // Solicitud
        Httpreq.open("GET", url, false);
        Httpreq.send(null);
        return Httpreq.responseText;
    }

}

export default bajarRutas = new bajarRutas();