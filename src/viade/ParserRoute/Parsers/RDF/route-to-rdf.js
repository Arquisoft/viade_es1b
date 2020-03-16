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

    
    
}