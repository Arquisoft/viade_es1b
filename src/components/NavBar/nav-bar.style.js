import styled from 'styled-components';
import { Navbar } from "react-bootstrap";
import { LogoutButton } from "@solid/react";
import 'leaflet/dist/leaflet.css';

export const DivStyle = styled.div`
    background-color: #FFFFFF;
    border: 1px solid lightgray;
    text-align: left;
    padding: 10px;
    width: auto;
    height: 5%;
  `;

export const DivStyle2 = styled.div`
    background-color: #FFFFFF;
    border: 1px solid lightgray;
    text-align: left;
    padding: 9px;
    width: auto;
    height: 5%;
  `;
export const DivStyle3 = styled.div`
    background-color: #FFFFFF;
    border: 1px solid lightgray;
    text-align: left;
    padding: 3px;
    width: auto;
    height: 5%;
  `;

export const NavStyle = styled(Navbar)`
    background-image: linear-gradient(to right, white, lightgrey);
    border: 1px solid lightgray;
    padding: 10px;
    align-items: center;
    height: 1%;
  `;

export const ButtonStyle = styled(LogoutButton)`
    background-image: linear-gradient(to right, white, white);
    border: 0px ;
    height: 1%;
    color: black;
  `;

export const Astyle = styled.a`
    color: black;
  `;
