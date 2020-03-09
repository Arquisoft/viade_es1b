import React from "react";
import { MapStyle, MapSection } from './map.style';
import { Ruta } from '@components';
import { TileLayer} from "react-leaflet";


class MapComponent extends React.Component {
  constructor(props){
    super();
    this.state = {
      lat: 43.354444,
      lng: -5.85166,
      zoom: 12
    }
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <MapStyle center = {position} zoom = {12}> 
      <TileLayer url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>
        <Ruta></Ruta>
      </MapStyle>

      
    );
  } 
}


class Mapa extends React.Component {
  render() {
    return (
    <MapSection>
     <MapComponent></MapComponent>
    </MapSection>

    );
  }
}

export default Mapa;