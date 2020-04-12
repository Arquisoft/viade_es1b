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
    padding: 10px;
    width: auto;
    height: 11%;
    right:auto;
    z-Index: 99;
  `;

export const ChooseButton = styled.div`
  input{
    width: 0.1px;
    height:0.1x;
    overflow: hidden;
    position: absolute;
    z-index: -1;
    }
  label {
    border: 1px solid #DAE0E6;
    border-radius: 4px;
    font-size: 12.8px;
    font-weight: bold;
    color: #000000;
    background-color: #51cae2;
    display: inline-block;
    transition: all .5s;
    cursor: pointer;
    padding: 6.4px 12.8px;
    width: fit-content;
    text-align: center;
    }
    
    label:hover {
      color: #000;
      background: #a4d1d1;
      border-color: #449DF5;
      transition: 0.25s all ease-in-out;
    }
`;

