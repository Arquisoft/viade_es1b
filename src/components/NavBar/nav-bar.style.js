import styled from 'styled-components';
import { Navbar } from "react-bootstrap";
import 'leaflet/dist/leaflet.css';

export const DivStyle = styled.div`
    background-color: #FFFFFF;
    border: 1px solid lightgray;
    text-align: left;
    padding: 10px;
    width: auto;
  `;

export const NavStyle = styled(Navbar)`
    background-image: linear-gradient(to right, white, lightgrey);
    border: 1px solid lightgray;
    padding: 10px;
    width: 100%;
    NavBar a {
        margin: 10px;
    }
    height: 1%;
  `;