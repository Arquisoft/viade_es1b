import createJson from '../viade/ParserRoute/Parsers/RDF/route-to-JSON';

class CreateRouteService {
    constructor() {
        //super();
        this.state = {
            markers: [],
            name: "",
        };
    }

    mapClick = (e) => {
        const { markers } = this.state;
        markers.push({ lat: e.latlng.lat, lng: e.latlng.lng })
        this.setState({ markers })
        this.draw();

    }

    draw() {
        let points = [];
        for (let i = 0; i < this.state.markers.length; i++) {
            points.push({ lat: this.state.markers[i].lat, lng: this.state.markers[i].lng })
        }
        return points;
    };

    sendData = () => {
        var { name } = this.state;
        const { markers } = this.state;
        if (name.length === 0)
            alert("La ruta tiene que tener un nombre");
        if (markers.length <= 1)
            alert("La ruta tiene que tener al menos 2 puntos");
        if (name.length !== 0 && markers.length > 1) {
            alert("Ruta guardada correctamente");
            createJson.createJson(name, markers);
        }

    }
}

export default CreateRouteService = new CreateRouteService();