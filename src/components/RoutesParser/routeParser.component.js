import React from "react";
import {  Marker, Popup } from "react-leaflet";

class Route extends React.Component {
  
    render() {
      return (
        <Marker position={[43.354444, -5.85166 ]}>
           <Popup>
               asdf
           </Popup>
        </Marker>
      );
    }
  }
  
  export default Route;