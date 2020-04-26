import styled from 'styled-components';
import { Navbar } from "react-bootstrap";
import { LogoutButton } from "@solid/react";
import 'leaflet/dist/leaflet.css';

export const DivStyle = styled.div`
    background-color: white;
    border: 1px solid gray;
    text-align: left;
    padding: 10px;
    width: auto;
    height: 5%;
    opacity: 0.80;
    border-radius: 0 0 0 0;
  `;

export const DivStyle2 = styled.div`
    background-color: lightgray;
    border: 1px solid gray;
    text-align: left;
    padding: 9px;
    width: auto;
    height: 5%;
    border-radius: 0 .25rem .25rem 0;
  `;

export const DivStyle1 = styled.div`
  background-color: white;
  border: 1px solid gray;
  text-align: left;
  padding: 10px;
  width: auto;
  height: 5%;
  opacity: 0.80;
  border-radius: .25rem 0 0 .25rem;
`;

export const DivStyle3 = styled.div`
    background-color: lightgray;
    border: 1px solid gray;
    text-align: left;
    padding: 3px;
    width: auto;
    height: 5%;
  `;

export const NavStyle = styled(Navbar)`
    background-image: linear-gradient( black, blue);
    padding: 10px;
    align-items: center;
  `;

export const ButtonStyle = styled(LogoutButton)`
    background-image: linear-gradient(to right, lightgray, lightgray);
    border: 0px ;
    height: 1%;
    color: black;
  `;

export const Astyle = styled.a`
    color: black;
  `;
