import React from 'react';
import L from 'leaflet';
import { TileLayer, Marker, Polyline, Popup } from 'react-leaflet';
import Rutas from './routes/rutas';
import { LoggedOut, LoggedIn } from '@solid/react';
import { Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { MapStyle } from './map.style';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

class Map extends React.Component {

  constructor() {
    super();

    this.name = Rutas.getNames()[0];
    this.puntos = []
    Rutas.getRutaByPosition(1).points.map(p => this.puntos.push(p.getCoordinates()));
  }

  getRoutes(id, e) {
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
    const position = this.puntos[0];

    const mapStyle = {
      position: 'absolute',
      width: '100%',
      height: '100%',
      zIndex: '1',
    };

    const divStyle = {
      position: 'absolute',
      borderRadius: '25px',
      backgroundColor: '#FFFFFF',
      border: '2px solid #000000',
      padding: '20px',
      width: 'auto',
      height: 'auto',
      marginTop: '1%',
      marginBottom: '5%',
      marginLeft: '90%',
      zIndex: '99',
    }

    return (

      <React.Fragment id="map" >
        <LoggedIn>
          <div style={divStyle}>
            <h2 id="name">{this.name}</h2>
            <ul>{Rutas.getNames().map((n, i) => <li key={i} onClick={(e) => this.getRoutes(n, e)}> {n} </li>)}</ul>
          </div>
          <div id="map" style={mapStyle}>
            <MapStyle id="map" center={position} zoom={15}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Polyline color={'red'} positions={this.puntos}></Polyline>
              <Marker position={this.puntos[0]}>
                <Popup>Inicio</Popup>
              </Marker>
              <Marker position={this.puntos[this.puntos.length - 1]}>
                <Popup>Fin</Popup>
              </Marker>
            </MapStyle>
          </div>
        </LoggedIn>
        <LoggedOut>
          <Redirect to='/login'></Redirect>
        </LoggedOut>
      </React.Fragment>

    );
  }
}

export default Map;
