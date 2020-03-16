import React from "react";
import { Marker, Popup } from "react-leaflet";
import { TileLayer, Polyline } from "react-leaflet";

class Ruta extends React.Component {
  constructor(route) {
    super();
    this.route = route;
  }
  render() {
    return (
      <div>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Polyline color={'blue'} positions={this.route.points}></Polyline>
        <Marker position={this.route.points[0]}>
          <Popup>Inicio</Popup>
        </Marker>
        <Marker position={this.route.points[this.points.length - 1]}>
          <Popup>Fin</Popup>
        </Marker>
      </div>


    );
  }
}

export default Ruta;