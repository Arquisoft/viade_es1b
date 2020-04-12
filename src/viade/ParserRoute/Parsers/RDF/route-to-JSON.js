import auth from "solid-auth-client";
import SolidFileClient from "solid-file-client";

class createJson {

    constructor() {

        //Instanciamos la variable, con let
        this.state = {
            //Estos son los ficheros, con file[0] accederíamos al primero, que es nuestro caso.
            //Creamos el file solid client:
            //Hay que hacer los 4 pasos que dice el githun de SolidFileClient
            sfc: new SolidFileClient(auth)

        };
        this.subirFicheroAPod = this.subirFicheroAPod.bind(this);
        this.fileToUpload = null;
    }

    async subirFicheroAPod(name, sdict) {
        //El archivo a subir será:
        let archivo = sdict;
        //Analizamos si está loggeado:
        let session = await auth.currentSession();

        if (session) {
            var id = `${session.webId}`;
            var date = new Date();
            var n = Math.round(date.getTime() / (1000));
            id = id.replace('/profile/card#me', '/public/');
            try {
                alert(id + n + "_" + name + ".json");
                await this.state.sfc.putFile(id + n + "_" + name + ".json", archivo, archivo.type);
                alert("Archivo subido");
            }
            catch (error) {
                console.error(error);
            }

        }
        else{
            console.log("No estás loggeado");
            alert("No estás loggeado");
        }
    }

    async createJson(name, markers) {
        var tot = '{ "@context": "http://schema.org",  "@type": "Trip", "name":' + '"' + name + '"' + ', "itinerary": { "@type": "ItemList", "numberOfItems":' + markers.length + ', "itemListOrder": "http://schema.org/ItemListOrderDescending","itemListElement": [';
        for (let i = 0; i < markers.length; i++) {
            if (i < markers.length - 1)
                tot = tot + '{ "@type": "GeoCoordinates", "latitude":' + markers[i].lat + ', "longitude":' + markers[i].lng + '},'
            else
                tot = tot + '{ "@type": "GeoCoordinates", "latitude":' + markers[i].lat + ', "longitude":' + markers[i].lng + '}'
        }
        tot = tot + '] } } ';
        var sdict = JSON.parse(tot);
        var save = JSON.stringify(sdict);
        this.fileToUpload = save;
        //this.subirFicheroAPod(name, save);
    }
}

export default createJson = new createJson();
