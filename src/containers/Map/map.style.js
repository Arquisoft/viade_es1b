import styled from 'styled-components';
import { Map } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

export const MapStyle = styled(Map)`
    position: relative;
    width: 100%;
    height: 93vh;
    z-Index: 1;
  `;

export const DivStyle = styled.div`
    position: absolute;
    border-radius: 25px;
    background-color: #FFFFFF;
    border: 2px solid #000000;
    padding: 20px;
    width: auto;
    height: auto;
    margin-top: 1%;
    margin-bottom: 5%;
    left: 90%;
    z-Index: 99;
  `;



