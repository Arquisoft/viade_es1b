
class createJson {

  async createJson(name, markers, imagesRoutes, videosRoutes) {
    var tot =
      '{ "@context": "http://schema.org",  "@type": "Trip", "name":"' +
      name +
      '", "itinerary": { "@type": "ItemList", "numberOfItems":' +
      markers.length +
      ', "itemListOrder": "http://schema.org/ItemListOrderDescending","itemListElement": [';
    for (let i = 0; i < markers.length; i++) {
      if (i < markers.length - 1)
        tot =
          tot +
          '{ "@type": "GeoCoordinates", "latitude":' +
          markers[i].lat +
          ', "longitude":' +
          markers[i].lng +
          "},";
      else
        tot =
          tot +
          '{ "@type": "GeoCoordinates", "latitude":' +
          markers[i].lat +
          ', "longitude":' +
          markers[i].lng +
          "}";
    }
    tot = tot + "] }";

    tot += ', "media": [';
    for (let i = 0; i < imagesRoutes.length; i++) {
      if (videosRoutes.length !== 0 && i < imagesRoutes.length - 1)
        tot += '{ "@id": "' + imagesRoutes[i] + '"},';
      else tot += '{ "@id": "' + imagesRoutes[i] + '"}';
    }
    if (videosRoutes.length >= 1 && imagesRoutes.length !== 0) tot += ",";
    for (let i = 0; i < videosRoutes.length; i++) {
      if (i < videosRoutes.length - 1)
        tot += '{ "@id": "' + videosRoutes[i] + '"},';
      else tot += '{ "@id": "' + videosRoutes[i] + '"}';
    }

    tot += "] } ";
    var sdict = JSON.parse(tot);
    var save = JSON.stringify(sdict);
    this.fileToUpload = save;
  }
}

export default createJson = new createJson();
