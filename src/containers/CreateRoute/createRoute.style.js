import styled from 'styled-components';
import { Map } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

export const MapStyle = styled(Map)`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
  `;

export const ButtonStyle = styled.button`
    float:left;
    width: auto;
    height: auto;
    background-color: #FFFFFF;
    border: 1px solid lightgray;
    padding: 10px;
  `;
export const ButtonStyle2 = styled.button`
    float:left;
    width: auto;
    height: auto;
    z-index: 99;
    background-color: #FFFFFF;
    border: 1px solid lightgray;
    padding: 10px;
  `;

export const InputStyle = styled.input`
    float:left;
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
    padding: 10px;
    width: auto;
    height: auto;
    right:auto;
    background-image: linear-gradient( white, lightgrey);
    z-Index: 99;
  `;

export const ChooseButton = styled.div`
  float:left;
  input{
    width: 0.1px;
    height:0.1x;
    overflow: hidden;
    position: absolute;
    z-index: -1;
    }
  label {
    border: 1px solid lightgray;
    font-size: 12.8px;
    color: #000000;
    background-color: #FFFFFF;
    display: inline-block;
    transition: all .5s;
    cursor: pointer;
    padding: 6.4px 12.8px;
    width: fit-content;
    text-align: center;
    }
`;

