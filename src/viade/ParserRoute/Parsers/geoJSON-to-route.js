import {Route,PointRoute} from "../../Model";

class GeoJSONToRoute {
    constructor(file){
        this.file = file;
    }

    // execute(){
    //     this.fileReader.onload=async (event)=>{
    //         return this.parse(event.target.result);
    //     }
    // }


    parse(){
        console.log(this.file);
        const reader = new FileReader(); 
        var data = reader.readAsText(this.file);
        console.log(data);
        var route = new Route(this.file.name, this.file.description, this.getPoints());
        // const items=this.getItems(geoJSON.coordinates);
        // const route=new Route(this.file.name,items);
        return route;
    }

    getPoints(){
        var points = [];
        
        //this.file.itinerary.itemListElement.map(p => points.push(new PointRoute(p.latitude, p.longitude, p.elevation)));
        // var point = [];
        // points.map(p => point.push([p.latitude, p.longitude, p.elevation]));
       
        return points;
    }
}

export default GeoJSONToRoute;