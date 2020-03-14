import {StringBuilder} from "../../../../utils";

class RouteToJsonld {
    constructor(route) {
        this.route = route;
        str = new StringBuilder();
    }

    parse() {
        str.append('{');
        str.append('"@context": "http://schema.org",');
        str.append('"@type": "Route",');
        str.append('"name": "');
        str.append(this.route.name);
        str.append('",');
        str.append('"description": ');
        str.append(this.route.description);
        str.append('",');
        str.append('"itinerary": {');

        str.append('"@type": "itemList",');
        str.append('"itemListOrder": "http://schema.org/ItemListOrderDescending",');
        str.append('"itemListElement": [');

        this.parsePoints();

        str.append('],');
        str.append('}');
        str.append('}');

        return this.str;
    }

    parsePoints() {
        let i = 0;
        for (i = 0; i < this.route.items.length ; i++) {

            str.append('{');
            str.append('"@type": "PointRoute",');
            
            str.append('"position":');
            str.append(i);

            str.append(', "item": {')
            str.append('"@type": "GeoCoordinates", ')

            str.append('"latitude": "');
            str.append(this.route.points[i].latitude);
            str.append('",');
            str.append('"longitude": "');
            str.append(this.route.points[i].longitude);
            str.append('"');

            if (this.route.item[i].elevation != null) {
                str.append('", elevation": "');
                str.append(this.route.item[i].elevation);
                str.append('",');
            }

            str.append('}');
            if (i < this.route.items.length-1) {
                str.append(',');
            }

        }
    }
}

export default RouteToJsonld;