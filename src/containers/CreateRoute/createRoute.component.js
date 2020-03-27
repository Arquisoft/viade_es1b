import React from 'react';
import L from 'leaflet';
import { TileLayer, Marker, Polyline, Popup } from 'react-leaflet';
import { Rutas } from '../../viade/Model';
import { LoggedOut, LoggedIn } from '@solid/react';
import { Redirect } from 'react-router-dom';
import { MapStyle } from './map.style';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

class createRoute extends React.Component {

  constructor() {
    super();
    this.state = {
      markers: []
    };
  }

  mapClick = (e) => {
    const { markers } = this.state
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

  render() {
    Rutas.actualizarRutasConPod();
    return (

      <React.Fragment id="map" >
        <LoggedIn>
          <MapStyle id="map" center={[43.3551061, -5.85]} zoom={15} onClick={this.mapClick}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {this.state.markers.map((position, idx) =>
              <Marker key={`marker-${idx}`} position={position}>
                <Popup>
                  <span>Popup</span>
                </Popup>
              </Marker>
            )}
            <Polyline
              positions={this.draw()}
            />
          </MapStyle>
        </LoggedIn>
        <LoggedOut>
          <Redirect to='/login'></Redirect>
        </LoggedOut>
      </React.Fragment>

    );
  }
}

export default createRoute;
