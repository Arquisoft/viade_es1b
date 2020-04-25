import styled from 'styled-components';
import { Map } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

export const MapStyle = styled(Map)`
    position: relative;
    width: 70%;
    height: 100%;
    z-Index: 1;
  `;

export const DivStyle = styled.div`
    position: relative;
    opacity: 0.93;
    float: left;
    background-image: linear-gradient( lightgrey, lightgrey);
    padding: 20px;
    width: 30%;
    height:100%;
    z-Index: 99;
    overflow: auto;    
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

export const DivStyle3 = styled.div`
  border: 1px solid gray;
  position:relative;
  height: auto;
  max-height: 30%;
  overflow: auto; 
  margin: 10px 0px 0px 0px;
`;

export const ButtonStyle = styled.button`
  margin: 5px; 
`;

export const DivStyle4 = styled.div`
  
  background-image: linear-gradient( white, white);
  border: 1px solid gray;
  overflow: auto;
  li{
    width:100%;
    text-align: left;
  }
`;

export const AmigosDiv = styled.div`
   height: auto;
   max-height: 30%;
   border: 1px solid gray;
   overflow: auto;
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
  overflow: auto;
  list-style: none;
  width : 100%;
  text-align:center;
  padding: 5px;
  
`;

export const InputStyle = styled.input`
    width: auto;
    height: auto;
`;


export const MediaDiv = styled.div`
  height: 10%;
  max-height: 30%;
  border: 1px solid gray;
  padding: 5px;
  overflow: auto;
`;

