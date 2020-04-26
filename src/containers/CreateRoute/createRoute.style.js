import styled from 'styled-components';
import { Map } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

export const MapStyle = styled(Map)`
    position: relative;
    width: 100%;
    height: 91%;
    z-Index: 1;
    border-radius: 0 0 .25rem 0.25rem;
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
    border-radius: 0 .25rem .25rem 0;
  `;

export const DivStyle1 = styled.div`
    position: absolute;
    width: 100%;
    height: 90%;
    background-image: url("/fondo2.jpg");
    background-size: cover;
    background-repeat: repeat;
    padding: 40px;
    overflow: hidden;
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
    border-radius: .25rem 0 0 .25rem;
    `;

export const DivStyle = styled.div`
    position: relative;
    background-color: #FFFFFF;
    border: 1px solid lightgray;
    padding: 10px;
    width: auto;
    height: 9%;
    opacity: 0.94;
    background-image: linear-gradient( lightgrey, lightgrey);
    z-Index: 99;
    border-radius: .25rem 0.25rem 0 0 ;
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

