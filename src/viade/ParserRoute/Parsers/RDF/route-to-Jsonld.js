import {StringBuilder} from "../../../../utils";

class RouteToJsonld {
    constructor(route) {
        this.route = route;
        this.str = new StringBuilder();
    }

    parse() {
        this.str.append('{');
        this.str.append('"@context": "http://schema.org",');
        this.str.append('"@type": "Route",');
        this.str.append('"name": "');
        this.str.append(this.route.name);
        this.str.append('",');
        this.str.append('"description": ');
        this.str.append(this.route.description);
        this.str.append('",');
        this.str.append('"itinerary": {');

        this.str.append('"@type": "itemList",');
        this.str.append('"itemListOrder": "http://schema.org/ItemListOrderDescending",');
        this.str.append('"itemListElement": [');

        this.parsePoints();

        this.str.append('],');
        this.str.append('}');
        this.str.append('}');

        return this.str;
    }

    parsePoints() {
        let i = 0;
        for (i = 0; i < this.route.items.length ; i++) {

            this.str.append('{');
            this.str.append('"@type": "PointRoute",');
            
            this.str.append('"position":');
            this.str.append(i);

            this.str.append(', "item": {')
            this.str.append('"@type": "GeoCoordinates", ')

            this.str.append('"latitude": "');
            this.str.append(this.route.points[i].latitude);
            this.str.append('",');
            this.str.append('"longitude": "');
            this.str.append(this.route.points[i].longitude);
            this.str.append('"');

            if (this.route.item[i].elevation != null) {
                this.str.append('", elevation": "');
                this.str.append(this.route.item[i].elevation);
                this.str.append('",');
            }

            this.str.append('}');
            if (i < this.route.items.length-1) {
                this.str.append(',');
            }

        }
    }
}

export default RouteToJsonld;