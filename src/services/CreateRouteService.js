import createJson from '../viade/ParserRoute/route-to-JSON';
import auth from 'solid-auth-client';
import SolidFileClient from 'solid-file-client';
import { NotificationManager } from "react-notifications";
const fc = new SolidFileClient(auth, { enableLogging: true });

class CreateRouteService {
    constructor() {
        //super();
        this.state = {
            fileName: "",
        };

        this.routeJson = null;
        this.imagesRoutes = [];
        this.videosRoutes = [];
    }

    async createRoute(name, markers, images, videos, ps, pf, vs, vf, l, su) {

        let session = await auth.currentSession();

        //Analizamos si está loggeado:
        if (session) {


            var webId = `${session.webId}`;


            let id = webId.replace('/profile/card#me', '/viade/');

            for (let i = 0; i < images.length; i++) {
                let imageRoute = id + "resources/" + images[i].name;
                if (fc.createFile(imageRoute, images[i], images[i].type)) {
                    this.imagesRoutes.push(imageRoute);
                    NotificationManager.error("", ps + images[i].name, 4000);
                } else {
                    NotificationManager.error("", pf + images[i].name, 4000);
                }
            }

            for (let i = 0; i < videos.length; i++) {
                let videoRoute = id + "resources/" + videos[i].name;
                if (fc.createFile(videoRoute, videos[i], videos[i].type)) {
                    this.videosRoutes.push(videoRoute);
                    NotificationManager.error("", vs + videos[i].name, 4000);
                } else {
                    NotificationManager.error("", vf + videos[i].name, 4000);
                }
            }

            this.fileName = name;

            createJson.createJson(name, markers, this.imagesRoutes, this.videosRoutes, webId);
            this.routeJson = JSON.parse(createJson.fileToUpload);
            this.routeJson = JSON.stringify(this.routeJson);
            //console.log(this.state);
            console.log(images);

            id = webId.replace('/profile/card#me', '/public/');
            this.subirFicheroAPod(name, this.routeJson, id, su);
        }
        else {
            NotificationManager.error("", l, 4000);
        }
    }

    async subirFicheroAPod(name, sdict, id, su) {
        //El archivo a subir será:
        let archivo = sdict;
        var date = new Date();
        var n = Math.round(date.getTime() / (1000));


        try {
            NotificationManager.error("", id + n + "_" + name + ".json", 4000);
            await fc.postItem(id + n + "_" + name + ".json", archivo, "application/json", archivo.type);
            NotificationManager.error("", su, 4000);
        }
        catch (error) {
            console.error(error);
        }

    }

}

export default CreateRouteService = new CreateRouteService();