import {StringBuilder} from "../../../../utils";

class RouteToRDF {
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
        str.append('"itinerary": {');

        str.append('"@type": "ItemList",');
        str.append('"itemListOrder": "http://schema.org/ItemListOrderDescending",');
        str.append('"itemListElement": [');

        this.parseItems();

        str.append('],');
        str.append('}');
        str.append('}');

        return this.str;
    }

    parseItems() {
        var i = 0;
        for (i = 0; i < this.route.items.length ; i++) {

            str.append('{');
            str.append('"@type": "PointRoute",');

            if (this.route.item[i].name != null) {
                str.append('"name": "');
                str.append(this.route.item[i].name);
                str.append('",');
            }

            if (this.route.item[i].elevation != null) {
                str.append('"elevation": "');
                str.append(this.route.item[i].elevation);
                str.append('",');
            }

          

            str.append('"latitude": "');
            str.append(this.route.item[i].latitude);
            str.append('",');
            str.append('"longitude": "');
            str.append(this.route.item[i].longitude);
            str.append('"');

            if (i == this.route.items.length - 1) {
                str.append('}');
            } else {
                str.append('},');
            }

        }
    }
}

export default routeToRDF;