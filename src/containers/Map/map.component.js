/* eslint-disable constructor-super */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */

import React, { useState, useEffect } from 'react';

import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import styled from "styled-components";

const Wrapper = styled.div`
    width: ${props = props.width};
    height: ${props = props.height};
`;

export default class MyMap extends React.Component{
  componentDidMount(){
    this.map = leaflet.map("map", {
      center: [58, 16],
      zoom: 6,
      zoomControl: false,
    });

    leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      detectRetina: true,
      maxZoom: 20,
      maxNativeZoom: 17,
    }).addTo(this.map);

  }

  render(){
    return <Wrapper width="1200px" height="720px" id="map"/>
  }
}

