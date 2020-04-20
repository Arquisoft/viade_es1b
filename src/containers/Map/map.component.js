import React from 'react';
import L from 'leaflet';
import { TileLayer, Marker, Polyline, Popup } from 'react-leaflet';
import { Rutas } from '../../viade/Model';
import ReactDOM from 'react-dom';
import { MapStyle, DivStyle, LiStyle, H3Style, LiStyle2, InputStyle } from './map.style';
import auth from "solid-auth-client";
import SolidFileClient from "solid-file-client";
import bajarRutas from "../../services/bajarRutas";


delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

class Lista extends React.Component {

  state = { count: 0 };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(({ count }) => ({ count: count + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getRoutes(id) {
    var newRuta = Rutas.getRutaByName(id);
    document.getElementById("name").textContent = newRuta.name;
    this.puntos = newRuta.point;
    const position = this.puntos[0];
    var update = <MapStyle id="map" center={position} zoom={15} >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Polyline color={'red'} positions={this.puntos}></Polyline>
      <Marker position={this.puntos[0]}>
        <Popup>Inicio</Popup>
      </Marker>
      <Marker position={this.puntos[this.puntos.length - 1]}>
        <Popup>Fin</Popup>
      </Marker>
    </MapStyle>;
    ReactDOM.render(update, document.getElementById('map'));
  }

  render() {
    return (<LiStyle2 data-testid="map-routes-list" id="lista">{Rutas.getNames().map((n, i) => <LiStyle key={i} onClick={() => this.getRoutes(n)}> <img src={process.env.PUBLIC_URL + "/img/icon/start.svg"} width="25" height="25" alt="" /> {n}</LiStyle>)}</LiStyle2>)
  }
}


class Map extends React.Component {

  constructor() {
    super();
    this.state = {
      sfc: new SolidFileClient(auth),
      direccion: "",
      rutas: []
    };
    // Bind es necesario para usar el this
    this.obtenerCarpetaPod = this.obtenerCarpetaPod.bind(this);
    this.name = Rutas.getNames()[0];
    this.puntos = [];
    Rutas.getRutaByPosition(0).points.map(p => this.puntos.push(p.getCoordinates()));
  }

  async obtenerCarpetaPod(parameter) {
    parameter.persist();
    let session = await auth.currentSession();
    var id = `${session.webId}`;
    id = id.replace('/profile/card#me', '/' + parameter.target.value);
    if (session) {
      this.setState({ direccion: id });
    }
  };

  getLista = docId => {
    this.setState({ requirementKey: Math.random() });
  };

  render() {
    Rutas.actualizarRutasConPod();
    const position = this.puntos[0];
    return (
      <React.Fragment>
        <DivStyle>
          <H3Style data-testid="map-title" id="name">{this.name}</H3Style>
          <InputStyle data-testid="download-input" type="text" onChange={this.obtenerCarpetaPod} placeholder="public/routes..." />
          <button data-testid="download-button" onClick={() => bajarRutas.bajarRutasDePod(this.state.direccion)} > <img src={process.env.PUBLIC_URL + "/img/icon/download.svg"} width="25" height="20" alt="" /> </button>
          <button onClick={this.getLista} > <img src={process.env.PUBLIC_URL + "/img/icon/refresh.svg"} width="25" height="20" alt="" /> </button>
          <Lista />
        </DivStyle>
        <MapStyle id="map" center={position} zoom={15}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </MapStyle>
      </React.Fragment>
    );
  }
}

export default Map;
