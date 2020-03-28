import styled from 'styled-components';
import { Map } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

export const MapStyle = styled(Map)`
    position: absolute;
    width: 100%;
    height: 100%;
    z-Index: 1;
  `;

export const ButtonStyle = styled.button`
    width: auto;
    height: auto;
    z-index: 99;
    margin-top: 10%;
    margin-bottom: 5%;
    left: 86%;
    background-color: #FFFFFF;
    border: 1px solid lightgray;
    padding: 10px;
  `;
export const ButtonStyle2 = styled.button`
    width: auto;
    height: auto;
    z-index: 99;
    margin-top: 10%;
    margin-bottom: 5%;
    left: 90%;
    background-color: #FFFFFF;
    border: 1px solid lightgray;
    padding: 10px;
  `;

export const InputStyle = styled.input`
    margin: auto;
    background-color: #FFFFFF;
    border: 1px solid lightgray;
    padding: 10px;
    width: auto;
    height: auto;
    z-index: 99;
    
    `;

export const DivStyle = styled.div`
    position: absolute;
    background-color: #FFFFFF;
    border: 1px solid lightgray;
    padding: 20px;
    width: auto;
    height: auto;
    margin-top: initial;
    margin-bottom: 95%;
    right:auto;
    z-Index: 99;
  `;



