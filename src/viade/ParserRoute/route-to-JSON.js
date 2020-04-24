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
        //this.subirFicheroAPod = this.subirFicheroAPod.bind(this);
        this.fileToUpload = null;
        this.header = '{'
            + '"@context": {'
            + '"@version": 1.1,'
            + '"comments": {'
            + '"@id": "viade:comments",'
            + '"@type": "@id"'
            + '},'
            + '"description": {'
            + '"@id": "schema:description",'
            + '"@type": "xs:string"'
            + '},'
            + '"media": {'
            + '"@container": "@list",'
            + '"@id": "viade:media"'
            + '},'
            + '"name": {'
            + '"@id": "schema:name",'
            + '"@type": "xsd:string"'
            + '},'
            + '"points": {'
            + '"@container": "@list",'
            + '"@id": "viade:points"'
            + '},'
            + '"latitude": {'
            + '"@id": "schema:latitude",'
            + '"@type": "xsd:double"'
            + '},'
            + '"longitude": {'
            + '"@id": "schema:longitude",'
            + '"@type": "xsd:double"'
            + '},'
            + '"elevation": {'
            + '"@id": "schema:elevation",'
            + '"@type": "xsd:decimal"'
            + '},'
            + '"author": {'
            + '"@id": "schema:author",'
            + '"@type": "@id"'
            + '},'
            + '"rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",'
            + '"rdfs": "http://www.w3.org/2000/01/rdf-schema#",'
            + '"schema": "http://schema.org/",'
            + '"viade": "http://arquisoft.github.io/viadeSpec/",'
            + '"xsd": "http://www.w3.org/2001/XMLSchema#"'
            + '}';

    }



    // async createJson(name, markers) {
    //     var tot = '{ "@context": "http://schema.org",  "@type": "Trip", "name":' + '"' + name + '"' + ', "itinerary": { "@type": "ItemList", "numberOfItems":' + markers.length + ', "itemListOrder": "http://schema.org/ItemListOrderDescending","itemListElement": [';
    //     for (let i = 0; i < markers.length; i++) {
    //         if (i < markers.length - 1)
    //             tot = tot + '{ "@type": "GeoCoordinates", "latitude":' + markers[i].lat + ', "longitude":' + markers[i].lng + '},'
    //         else
    //             tot = tot + '{ "@type": "GeoCoordinates", "latitude":' + markers[i].lat + ', "longitude":' + markers[i].lng + '}'
    //     }
    //     tot = tot + '] } } ';
    //     var sdict = JSON.parse(tot);
    //     var save = JSON.stringify(sdict);
    //     this.fileToUpload = save;
    //     //this.subirFicheroAPod(name, save);
    // }

    async createJson(name, markers, imagesRoutes, videosRoutes, webId) {

        // var tot = this.header + ',"name":' + '"' + name + '"' + ', "author": ' + '"' + webId + '"' + ', "description: " : "Ejemplo de descripcion"';
        // tot += ', "media": [';
        // for (let i = 0; i < imagesRoutes.length; i++) {
        //     if (videosRoutes.length !== 0 && i < imagesRoutes.length - 1)
        //         tot += '{ "@id": "' + imagesRoutes[i] + '"},';
        //     else
        //         tot += '{ "@id": "' + imagesRoutes[i] + '"}';
        // }

        // for (let i = 0; i < videosRoutes.length; i++) {
        //     if (i < videosRoutes.length - 1)
        //         tot += '{ "@id": "' + videosRoutes[i] + '"},';
        //     else
        //         tot += '{ "@id": "' + videosRoutes[i] + '"}';
        // }

        // tot += ']';

        // tot += ', "points": [';
        // for (let i = 0; i < markers.length; i++) {
        //     if (i < markers.length - 1)
        //         tot = tot + '{ "latitude":' + markers[i].lat + ', "longitude":' + markers[i].lng + '},'
        //     else
        //         tot = tot + '{ "latitude":' + markers[i].lat + ', "longitude":' + markers[i].lng + '}'
        // }
        // tot += ']'
        // tot = tot + '} ';

        var tot = '{ "@context": "http://schema.org",  "@type": "Trip", "name":' + '"' + name + '"' + ', "itinerary": { "@type": "ItemList", "numberOfItems":' + markers.length + ', "itemListOrder": "http://schema.org/ItemListOrderDescending","itemListElement": [';
        for (let i = 0; i < markers.length; i++) {
            if (i < markers.length - 1)
                tot = tot + '{ "@type": "GeoCoordinates", "latitude":' + markers[i].lat + ', "longitude":' + markers[i].lng + '},'
            else
                tot = tot + '{ "@type": "GeoCoordinates", "latitude":' + markers[i].lat + ', "longitude":' + markers[i].lng + '}'
        }
        tot = tot + '] }';

        tot += ', "media": [';
        for (let i = 0; i < imagesRoutes.length; i++) {
            if (videosRoutes.length !== 0 && i < imagesRoutes.length - 1)
                tot += '{ "@id": "' + imagesRoutes[i] + '"},';
            else
                tot += '{ "@id": "' + imagesRoutes[i] + '"}';
        }
        if (videosRoutes.length >= 1 && imagesRoutes.length != 0)
            tot += ","
        for (let i = 0; i < videosRoutes.length; i++) {
            if (i < videosRoutes.length - 1)
                tot += '{ "@id": "' + videosRoutes[i] + '"},';
            else
                tot += '{ "@id": "' + videosRoutes[i] + '"}';
        }

        tot += '] } ';
        console.log(tot);
        var sdict = JSON.parse(tot);
        var save = JSON.stringify(sdict);
        this.fileToUpload = save;
        //this.subirFicheroAPod(name, save);
    }

}

export default createJson = new createJson();
