import styled from 'styled-components';
import { Map } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

export const MapStyle = styled(Map)`
    position: absolute;
    width: 100%;
    height: 100%;
    z-Index: 1;
  `;

export const DivStyle = styled.div`
    position: absolute;
    background-color: #FFFFFF;
    border: 1px solid lightgray;
    padding: 20px;
    width: auto;
    height: auto;
    z-Index: 99;
  `;



