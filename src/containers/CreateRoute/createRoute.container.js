import React from 'react';
import L from 'leaflet';
import { TileLayer, Marker, Polyline } from 'react-leaflet';
import { LoggedOut, LoggedIn } from '@solid/react';
import { Redirect } from 'react-router-dom';
import { MapStyle, DivStyle, InputStyle, ButtonStyle, ButtonStyle2 } from './createRoute.style';
import createJson from './createJson';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

class createRoute extends React.Component {

  constructor() {
    alert("If you have blocked access to geolocation the map will not render. Please allow access to your location");
    super();
    this.state = {
      markers: [],
      name: "",
    };
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({
          center: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          }
        })
      },
        (error) => {
          if (error.code == error.PERMISSION_DENIED) {
            this.setState({
              center: {
                lat: 43.3551061,
                lng: -5.8512792,
              }
            })
          }
        });
    }


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

  updateValue = (n) => {
    var { name } = this.state;
    name = document.getElementById('name').value;
    this.setState({ name });
    console.log(name);
  }

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

  clear() {
    window.location.reload();
  }

  render() {
    this.getLocation();

    return (
      <React.Fragment>
        <LoggedIn>
          <DivStyle>
            <InputStyle id="name" type="text" placeholder="Write routes name..." ref={this.name} onChange={this.updateValue} />
            <ButtonStyle onClick={this.sendData} ><img src={process.env.PUBLIC_URL + "/img/icon/upload.svg"} width="20" height="20" alt="" /> </ButtonStyle>
            <ButtonStyle2 onClick={this.clear}> <img src={process.env.PUBLIC_URL + "/img/icon/cross.svg"} width="20" height="20" alt="" /> </ButtonStyle2>
          </DivStyle>
          <MapStyle id="map" center={this.state.center} zoom={15} onClick={this.mapClick}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {this.state.markers.map((position, idx) =>
              <Marker key={`marker-${idx}`} position={position}>
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
