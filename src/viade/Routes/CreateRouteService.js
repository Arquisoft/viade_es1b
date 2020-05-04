import createJson from "../ParserRoute/route-to-JSON";
import React from "react";
import auth from "solid-auth-client";
import SolidFileClient from "solid-file-client";
import { NotificationManager } from "react-notifications";
const fc = new SolidFileClient(auth, { enableLogging: true });

class CreateRouteService extends React.Component {
  constructor() {
    super();
    this.state = {
      fileName: "",
    };

    this.routeJson = null;
    this.imagesRoutes = [];
    this.videosRoutes = [];
  }

  async createRoute(
    name,
    markers,
    images,
    videos,
    photoS,
    photoF,
    videoS,
    videoF,
    logged,
    success
  ) {
    let session = await auth.currentSession();
    //Analizamos si está loggeado:
    if (session) {
      var webId = `${session.webId}`;
      let id = webId.replace("/profile/card#me", "/viade/");
      //nuevo metodo
      this.parseArray(images, this.imagesRoutes, photoS, photoF, id);
      this.parseArray(videos, this.videosRoutes, videoS, videoF, id);
      this.fileName = name;
      var date = new Date();
      var n = Math.round(date.getTime() / 1000);
      var namef = name;
      name = n + "_" + name;
      createJson.createJson(
        namef,
        name,
        markers,
        this.imagesRoutes,
        this.videosRoutes,
        webId
      );
      this.routeJson = JSON.parse(createJson.fileToUpload);
      this.routeJson = JSON.stringify(this.routeJson);
      id = webId.replace("/profile/card#me", "/viade/routes/");
      this.subirFicheroAPod(name, this.routeJson, id, success);
    } else {
      NotificationManager.error("", logged, 4000);
    }
  }

  parseArray(array1, array2, msg1, msg2, id) {
    for (let i = 0; i < array1.length; i++) {
      let imageRoute = id + "resources/" + array1[i].name;
      if (fc.createFile(imageRoute, array1[i], array1[i].type)) {
        array2.push(imageRoute);
        NotificationManager.success("", msg1 + array1[i].name, 4000);
      } else {
        NotificationManager.error("", msg2 + array1[i].name, 4000);
      }
    }
  }

  async subirFicheroAPod(name, sdict, id, su) {
    //El archivo a subir será:
    let archivo = sdict;
    try {
      await fc.postItem(
        id + name + ".json",
        archivo,
        "application/json",
        archivo.type
      );
      NotificationManager.error("", su, 4000);
    } catch (error) {
      archivo = sdict;
    }
  }
}

export default CreateRouteService = new CreateRouteService();
