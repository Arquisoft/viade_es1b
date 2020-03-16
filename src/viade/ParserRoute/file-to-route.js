import {GeoJSONToRoute} from"./Parsers";

class FileToRoute{
    constructor(file){
        this.file=file;
        this.selectParser(file);
        //this.parser=null;
    }

    selectParser(file){
        switch (file.type) {
            case "application/geo+json":
                this.parser=new GeoJSONToRoute(file);
                break;
            case "application/json":
                this.parser=new GeoJSONToRoute(file);
                break; 
            case "application/xml":
                this.parser=new XMLDocument(file);
                break;

            default:
                console.log("formato no soportado");
                break;
        }
        
    }

    parse(){
        return this.parser.parse();
    }
}

export default FileToRoute;