import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';

import {
  MapContainer,
  H2prueba,
  Derecha,
  MapSection,
  Button
} from './map.style';

const MapSize = styled.div`
height: $(props => props.height);
width: $(props => props.width)`
;

class Map extends React.Component{
  _isMounted = true;

componentDidMount(){
  this._isMounted = true;

    if (this._isMounted) {
      this.map = L.map('map',{
        center:[58.16],
        zoom: 6,
        zoomControl: false
      });
    
      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png',{
        detectRetina: true,
        maxZoom:20,
        maxNativeZoom: 17,
      }).addTo(this.map);
    }

}

componentWillUnmount() {
  this.abortController.abort();
}

render(){return <MapSize height="800px" width="800px" id="map"></MapSize>};
}

class Mapa extends React.Component {
  render() {
    return (
        <MapSection>
   
            <Map></Map>
          
        </MapSection>
  
    );
  }
}

export default Mapa;