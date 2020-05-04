import auth from "solid-auth-client";
import SolidFileClient from "solid-file-client";
import { NotificationManager } from "react-notifications";

class bajarRutas {
  constructor() {
    this.sfc = new SolidFileClient(auth);
    this.rutas = [];
    this.tmpFolder = "";
  }

  async bajarRutasDePod(direccion, exito, fallo, vacio, noruta, mientras) {
    let session = await auth.currentSession();
    var id = `${session.webId}`;
    this.rutas = [];
    this.tmpFolder = id.replace("/profile/card#me", "/public/temp");
    var totalRutas = 0;
    var rutasCargadas = 0;
    //Dandole al boton se obtendria los contenidos del fichero
    if (direccion.length === 0) NotificationManager.error("", vacio, 3000);
    else {
      // Leemos toda la carpeta
      try {
        let folder = await this.sfc.readFolder(direccion, null);
        // Leemos los ficheros
        const files = folder.files;
        var hayRutas = false;
        // Para cada fichero que sea json (o el formato que vaya a ser), lo recoge
        //metodo
        totalRutas = this.aux(files, totalRutas);
        //metodo
        files.forEach(async (file) => {
          if (file.type === "application/json") {
            hayRutas = true;
            let copiado = await this.sfc.copyFile(
              file.url,
              this.tmpFolder + "/" + file.name
            );
            if (copiado) {
              let eliminado = await this.ifCopied(this.rutas, this.tmpFolder, file.name, fallo);
              if (eliminado) {
                rutasCargadas++;
              }
              if (totalRutas === rutasCargadas) {
                this.sfc.deleteFolder(this.tmpFolder);
                NotificationManager.success("", exito, 3000);
                return 1;
              }
            }
          }
        });
        if (hayRutas) {
          NotificationManager.success("", mientras, 3000);
          return -1;
        } else {
          NotificationManager.error("", noruta, 3000);
          return -1;
        }
      } catch (error) {
        NotificationManager.error("", fallo, 3000);
        return 1;
      }
    }
  }

  aux(files, total) {
    files.forEach((file) => {
      if (file.type === "application/json") total++;
    });
    return total;
  }

  async ifCopied(rutas, tmpFolder, name, fallo) {

    rutas.push(
      this.loadJSon(this.tmpFolder + "/" + name, fallo)
    );
    let eliminado = await this.sfc.deleteFile(
      tmpFolder + "/" + name
    );
    return eliminado;
  }

  // Metodo auxiliar para obtener el objeto json
  loadJSon(url, fallo) {
    try {
      var Httpreq = new XMLHttpRequest(); // Solicitud
      Httpreq.open("GET", url, false);
      Httpreq.send(null);
      var jsonRuta = JSON.parse(Httpreq.responseText);
      return jsonRuta;
    } catch (e) {
      NotificationManager.error("", fallo, 3000);
    }
  }
}

export default bajarRutas = new bajarRutas();
