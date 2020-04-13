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

    createRoute(name, markers, images){
        this.fileName = name;

        createJson.createJson(name, markers);
        this.state.routeJson = JSON.parse(createJson.fileToUpload);
        this.state.routeJson = JSON.stringify(this.state.routeJson);
        //console.log(this.state);
        console.log(images);

        this.subirFicheroAPod(name, this.state.routeJson);
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
                await this.state.sfc.postItem(id + n + "_" + name + ".json", archivo, "application/json",archivo.type);
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
    
    //   async createFolder (folder, file, photo, video, setFile, setImage, setVideo) {
    //     let existe = await fc.itemExists(folder);
    //     if (!existe) {
    //       await fc.createFolder(folder);
    //     }
    //     let i = 0;
      
        
    //     await fc.createFile(folder + "/routes/" + file.name, file, file.type);
    //     await fc.createFile(folder + "/comments/routeComments/" + file.name.split('.json')[0] + "Comments.json", getJson(), file.type);
      
    //     for (i = 0; photo != null && i < photo.length; i++) {
    //       if(fc.createFile(folder + "/resources/" + photo[i].name, photo[i], "image/png")){
    //         showSuccessUploadFile("La photo "+ photo[i].name);
    //       }else{
    //         showErrorUploadFile("La photo"+ photo[i].name);
    //       }
    //     }
      
    //     for (i = 0; video != null && i < video.length; i++) {
    //       if(fc.createFile(folder + "/resources/" + video[i].name, video[i], "video/mp4")){
    //         showSuccessUploadFile("El video"+ video[i].name);
    //       }else{
    //         showErrorUploadFile("El video"+ video[i].name);
    //       }
    //     }
      
    //     showSuccessUploadFile("Ruta " + file.name);
      
    //     setFile(null);
    //     setImage(null);
    //     setVideo(null);
      
    //     document.getElementById('photo').value = null;
    //     document.getElementById('video').value = null;
    //     document.getElementById('route').value = null;
    //   }
}

export default CreateRouteService = new CreateRouteService();