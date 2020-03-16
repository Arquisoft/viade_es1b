import React from 'react';
import L from 'leaflet';
import {TileLayer, Marker, Polyline, Popup } from 'react-leaflet';
import Rutas from './routes/rutas';
import ReactDOM from 'react-dom';
import {MapStyle} from './map.style';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

class UpForm extends React.Component {

  constructor() {
    super();
    this.name = Rutas.getNames()[0];
    this.puntos = []
    Rutas.getRutaByPosition(1).points.map(p => this.puntos.push(p.getCoordinates()));
  }

  changeName(id, e) {
    var newRuta = Rutas.getRutaByName(id);
    document.getElementById("name").textContent = newRuta.name;

    this.puntos = newRuta.point;
    const position = this.puntos[0];

    var a = <MapStyle id="map" center={position} zoom={15} >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Polyline color={'blue'} positions={this.puntos}></Polyline>
      <Marker position={this.puntos[0]}>
        <Popup>Inicio</Popup>
      </Marker>
      <Marker position={this.puntos[this.puntos.length - 1]}>
        <Popup>Fin</Popup>
      </Marker>
    </MapStyle>;

    ReactDOM.render(a, document.getElementById('map'));
  }

  render() {
    const position = this.puntos[0];
    return (
      <React.Fragment >
          <MapStyle  id="map" center={position} zoom={15}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Polyline color={'blue'} positions={this.puntos}></Polyline>
            <Marker position={this.puntos[0]}>
              <Popup>Inicio</Popup>
            </Marker>
            <Marker position={this.puntos[this.puntos.length - 1]}>
              <Popup>Fin</Popup>
            </Marker>
          </MapStyle>
        <aside>
        <h2 id="name">{this.name}</h2>
        <p id="description">{this.description}</p>
        <h3>Tus rutas</h3>
        <ul>{Rutas.getNames().map((n, i) => <li key={i} onClick={(e) => this.changeName(n, e)}> {n} </li>)}</ul>
      </aside>
      </React.Fragment>
    );
  }
}

export default UpForm;