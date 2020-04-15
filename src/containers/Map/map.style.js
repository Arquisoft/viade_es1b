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
    background-image: linear-gradient( white, lightgrey);
    border: 1px solid lightgray;
    padding: 20px;
    width: 20%;
    height: 35%;
    z-Index: 99;
    overflow: auto;
    align:left;
  `;

export const LiStyle = styled.li`
    list-style: none;
    width : 100%;
    border: 1px solid gray;
    background-color: white;
    text-align:left;
    padding: 5px;
  `;

export const H3Style = styled.h3`
    text-align:center;
    font-family: Arial, Helvetica, sans-serif;
  `;

export const LiStyle2 = styled.div`
  border: 1px solid gray;
  list-style: none;
  width : 95%;
  text-align:center;
  padding: 5px;
  margin: 10px;
`;

export const InputStyle = styled.input`
    width: auto;
    height: auto;
    `;




