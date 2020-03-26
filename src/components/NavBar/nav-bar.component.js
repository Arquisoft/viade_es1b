import React from "react";
import LoggedIn from "@solid/react/module/components/LoggedIn";
import { useWebId } from '@solid/react';
import { LogoutButton } from "@solid/react";
import { DivStyle, NavStyle } from './nav-bar.style';

const NavBar = props => {
    const name = useWebId();

    return (
        <LoggedIn>
            <NavStyle>
                <a href="#/"><img src={process.env.PUBLIC_URL + "/img/inrupt.svg"} width="200" height="50" alt="" /></a>
                <DivStyle><a href="#/map"><img src={process.env.PUBLIC_URL + "/img/icon/map.svg"} width="20" height="20" alt="" /> Map</a></DivStyle>
                <DivStyle><a href="#/upload"><img src={process.env.PUBLIC_URL + "/img/icon/upload.svg"} width="20" height="20" alt="" /> Upload</a></DivStyle>
                <DivStyle><a href="#/download"><img src={process.env.PUBLIC_URL + "/img/icon/download.svg"} width="20" height="20" alt="" /> Download</a></DivStyle>
                <DivStyle><a href={name}><img src={process.env.PUBLIC_URL + "/img/icon/empty-profile.svg"} width="20" height="20" alt="" /> Profile</a></DivStyle>
                <DivStyle><LogoutButton></LogoutButton></DivStyle>
            </NavStyle>
        </LoggedIn>
    );
}
export default NavBar;
