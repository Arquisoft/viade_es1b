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
    width: 30%;
    height: auto;
    max-height: 50%;
    z-Index: 99;
    overflow: auto;
    align:left;
  `;

export const DivStyle3 = styled.div`
  overflow: auto; 
`;

export const DivStyle4 = styled.div`
  background-image: linear-gradient( white, white);
  border: 1px solid gray;
  overflow: auto;
  button{
    width:100%;
    text-align: left;
  }
`;

export const AmigosDiv = styled.div`
   border: 1px solid gray;
   padding: 5px;
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




