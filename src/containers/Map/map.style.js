import styled from "styled-components";
import { Map } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export const MapStyle = styled(Map)`
  position: relative;
  width: auto;
  height: 100%;
  z-index: 1;
  border-radius: 0 0.25rem 0.25rem 0;
`;

export const DivStyle = styled.div`
  position: relative;
  float: left;
  background-image: linear-gradient(white, white);
  padding: 20px;
  width: 30%;
  height: 100%;
  z-index: 99;
  overflow: auto;
  border-radius: 0.25rem 0 0 0.25rem;
`;

export const DivStyle1 = styled.div`
  position: absolute;
  width: 100%;
  height: 90%;
  background-image: url("img/fondo2.png");
  background-size: cover;
  background-repeat: repeat;
  overflow: hidden;
`;

export const DivStyle3 = styled.div`
  border: 1px solid gray;
  position: relative;
  height: auto;
  max-height: 30%;
  overflow: auto;
  margin: 10px 0px 0px 0px;
  border-radius: 0.25rem 0.25rem 0.25rem 0.25rem;
  margin-bottom: 10px;
`;

export const ButtonStyle = styled.button`
  margin: 5px;
`;

export const DivStyle4 = styled.div`
  background-image: linear-gradient(white, white);
  border: 1px solid gray;
  overflow: auto;
  li {
    width: 100%;
    text-align: left;
    border-radius: 0.25rem 0.25rem 0.25rem 0.25rem;
  }
  border-radius: 0.25rem 0.25rem 0.25rem 0.25rem;
`;

export const AmigosDiv = styled.div`
  height: auto;
  max-height: 30%;
  border: 1px solid gray;
  overflow: auto;
  padding: 5px;
  border-radius: 0.25rem 0.25rem 0.25rem 0.25rem;
`;

export const LiStyle = styled.li`
  list-style: none;
  width: 100%;
  border: 1px solid gray;
  background-color: white;
  text-align: left;
  padding: 5px;
  border-radius: 0.25rem 0.25rem 0.25rem 0.25rem;
`;

export const H3Style = styled.h3`
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
`;

export const LiStyle2 = styled.div`
  overflow: auto;
  list-style: none;
  width: 100%;
  text-align: center;
  padding: 5px;
  border-radius: 0.25rem 0.25rem 0.25rem 0.25rem;
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
  border-radius: 0.25rem 0.25rem 0.25rem 0.25rem;
`;
export const DivStyle5 = styled.div`
  display: none;
`;
