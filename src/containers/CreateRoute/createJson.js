import * as fs from 'browserify-fs';

class createJson {


    async createJson(name, markers) {
        var tot = '{ "@context": "http://schema.org",  "@type": "Trip", "name":' + '"' + name + '"' + ', "itinerary": { "@type": "ItemList", "numberOfItems":' + markers.length + ', "itemListOrder": "http://schema.org/ItemListOrderDescending","itemListElement": [';
        for (let i = 0; i < markers.length; i++) {
            if (i < markers.length - 1)
                tot = tot + '{ "@type": "GeoCoordinates", "latitude":' + markers[i].lat + ', "longitude":' + markers[i].lng + '},'
            else
                tot = tot + '{ "@type": "GeoCoordinates", "latitude":' + markers[i].lat + ', "longitude":' + markers[i].lng + '}'
        }
        tot = tot + '] } } ';
        console.log(tot);
        var sdict = JSON.parse(tot);
        console.log(sdict);
    }
}

export default createJson = new createJson();