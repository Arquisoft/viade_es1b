import {Route,PointRoute} from "../../Model";

class GeoJSONToRoute {
    constructor(file){
        this.file=file;
        this.fileReader=new FileReader();
    }

    execute(){
        this.fileReader.onload=async (event)=>{
            return this.parse(event.target.result);
        }
    }


    parse(content){
        const geoJSON=JSON.parse(content);
        const items=this.getItems(geoJSON.coordinates);
        const route=new Route(this.file.name,items);
        return route;
    }

    getItems(coordinates){
        return coordinates.map((coor)=>{
          return new PointRoute(coor[0],coor[1], coor[2]);
        })
    }
}

export default GeoJSONToRoute;