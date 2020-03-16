import RouteToJsonld from './route-to-Jsonld';

class RouteToRDF {
    constructor(route, webId) {
        this.route = route;
        this.webId=webId;

        //str = new StringBuilder();
    }

    
    parse(){
        const {default:data} = require('@solid/query-ldflex');
        const jsonParser = new RouteToJsonld(this.route);
        const fileToUpload = jsonParser.parse();
        
        const user = data[this.webId];
        
    }

    // async function processItem(file) {
    //     let reader = new FileReader();
    //     let nameFile = file.name;
    //     reader.onload = function(event) {
    //       let fileContent = reader.result;
    //       const auth = require("solid-auth-client");
    //       auth.trackSession(session => {
    //         if (!session) {
    //           return;
    //         } else {
    //           /*
    //             15 == length("profile/card#me")
    //           */
    //           let webId = session.webId;
    //           let urlRouteInPod = webId.slice(0, webId.length - 15).concat("public/MyRoutes/").concat(nameFile);
    //           event.preventDefault();
    //           const fc = new FC(auth);
    //           fc.createFile(urlRouteInPod, fileContent, "text/turtle", {}).then((content) => {
    
    //             NotificationManager.success(t("upload.successMessage"), t("upload.successTitle"));
    //           })
    //             .catch(err => console.error(`Error: ${err}`));
    //         }
    //       });
    //     };
    //     reader.readAsText(item);
    //   }
    
    
}