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

    async createRoute(name, markers, images, videos, photoS, photoF, videoS, videoF, logged, success) {

        let session = await auth.currentSession();
        //Analizamos si está loggeado:
        if (session) {
            var webId = `${session.webId}`;
            let id = webId.replace('/profile/card#me', '/viade/');

            for (let i = 0; i < images.length; i++) {
                let imageRoute = id + "resources/" + images[i].name;
                if (fc.createFile(imageRoute, images[i], images[i].type)) {
                    this.imagesRoutes.push(imageRoute);
                    NotificationManager.success("", photoS + images[i].name, 4000);
                } else {
                    NotificationManager.error("", photoF + images[i].name, 4000);
                }
            }

            for (let i = 0; i < videos.length; i++) {
                let videoRoute = id + "resources/" + videos[i].name;
                if (fc.createFile(videoRoute, videos[i], videos[i].type)) {
                    this.videosRoutes.push(videoRoute);
                    NotificationManager.success("", videoS + videos[i].name, 4000);
                } else {
                    NotificationManager.error("", videoF + videos[i].name, 4000);
                }
            }

            this.fileName = name;
            var date = new Date();
            var n = Math.round(date.getTime() / (1000));
            name = n + "_" + name;
            createJson.createJson(name, markers, this.imagesRoutes, this.videosRoutes, webId);
            this.routeJson = JSON.parse(createJson.fileToUpload);
            this.routeJson = JSON.stringify(this.routeJson);

            id = webId.replace('/profile/card#me', '/viade/routes/');
            this.subirFicheroAPod(name, this.routeJson, id, success);
        }
        else {
            NotificationManager.error("", logged, 4000);
        }
    }

    async subirFicheroAPod(name, sdict, id, su) {
        //El archivo a subir será:
        let archivo = sdict;
        try {
            await fc.postItem(id + name + ".json", archivo, "application/json", archivo.type);
            NotificationManager.error("", su, 4000);
        }
        catch (error) {
        }

    }

}

export default CreateRouteService = new CreateRouteService();