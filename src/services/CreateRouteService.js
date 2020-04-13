import createJson from '../viade/ParserRoute/Parsers/RDF/route-to-JSON';
import auth from 'solid-auth-client';
import SolidFileClient from 'solid-file-client';
const fc = new SolidFileClient(auth, { enableLogging: true });

class CreateRouteService {
    constructor() {
        //super();
        this.state = {
            fileName: "",
            routeJson: null,
            sfc: new SolidFileClient(auth)
        };
    }

    async createRoute(name, markers, images, videos) {

        let session = await auth.currentSession();

        if (session) {
            let imagesRoutes =[];
            let videosRoutes =[];

            var webId = `${session.webId}`;

            
            let id = webId.replace('/profile/card#me', '/public/');

            for (let i = 0; i < images.length; i++) {
                let imageRoute = id + "resources/" + images[i].name;
                if (fc.createFile(imageRoute, images[i], images[i].type)) {
                    imagesRoutes.push(imageRoute);
                    alert("Foto " + images[i].name + " subida ");
                } else {
                    alert("Error al subir la foto " + images[i].name);
                }
            }

            for (let i = 0; i < videos.length; i++) {
                let videoRoute = id + "resources/" + videos[i].name;
                if (fc.createFile(videoRoute, videos[i], videos[i].type)) {
                    videosRoutes.push(videoRoute);
                    alert("Foto " + videos[i].name + " subida ");
                } else {
                    alert("Error al subir la foto " + videos[i].name);
                }
            }

            this.fileName = name;

            createJson.createJson(name, markers, imagesRoutes, videosRoutes, webId);
            this.state.routeJson = JSON.parse(createJson.fileToUpload);
            this.state.routeJson = JSON.stringify(this.state.routeJson);
            //console.log(this.state);
            console.log(images);


            this.subirFicheroAPod(name, this.state.routeJson, id);
        }
        else {
            console.log("No estás loggeado");
            alert("No estás loggeado");
        }
    }

    async subirFicheroAPod(name, sdict, id) {
        //El archivo a subir será:
        let archivo = sdict;
        var date = new Date();
        var n = Math.round(date.getTime() / (1000));
        //Analizamos si está loggeado:

        try {
            alert(id + n + "_" + name + ".json");
            await this.state.sfc.postItem(id + n + "_" + name + ".json", archivo, "application/json", archivo.type);
            alert("Archivo subido");
        }
        catch (error) {
            console.error(error);
        }

    }

}

export default CreateRouteService = new CreateRouteService();