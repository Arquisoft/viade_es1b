import styled from "styled-components";
import { Map } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export const MapStyle = styled(Map)`
  position: relative;
  width: 100%;
  height: 90%;
  z-index: 1;
  border-radius: 0 0 0.25rem 0.25rem;
`;

export const ButtonStyle = styled.button`
  position: relative;
  float: left;
  width: auto;
  height: auto;
  background-color: #ffffff;
  border: 1px solid lightgray;
  padding: 10px;
`;
export const ButtonStyle2 = styled.button`
  position: relative;
  float: left;
  width: auto;
  height: auto;
  z-index: 99;
  background-color: #ffffff;
  border: 1px solid lightgray;
  padding: 10px;
  border-radius: 0 0.25rem 0.25rem 0;
`;

export const DivStyle1 = styled.div`
  position: absolute;
  width: 100%;
  height: 90%;
  background-image: url("img/fondo2.jpg");
  background-size: cover;
  background-repeat: repeat;
  padding: 40px;
  overflow: hidden;
`;

export const InputStyle = styled.input`
  float: left;
  margin: auto;
  background-color: #ffffff;
  border: 1px solid lightgray;
  padding: 10px;
  width: auto;
  height: auto;
  z-index: 99;
  border-radius: 0.25rem 0 0 0.25rem;
`;

export const DivStyle = styled.div`
  position: relative;
  background-color: #ffffff;
  border: 1px solid lightgray;
  padding: 10px;
  width: auto;
  height: 10%;
  opacity: 0.94;
  background-image: linear-gradient(lightgrey, lightgrey);
  z-index: 99;
  border-radius: 0.25rem 0.25rem 0 0;
`;

export const ChooseButton = styled.div`
  float: left;
  height: auto;
  input {
    width: 0.1px;
    height: 0.1x;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
  label {
    border: 1px solid lightgray;
    font-size: 12.8px;
    color: #000000;
    background-color: #ffffff;
    display: inline-block;
    transition: all 0.5s;
    cursor: pointer;
    padding: 6.4px 12.8px;
    width: fit-content;
    text-align: center;
  }
`;
