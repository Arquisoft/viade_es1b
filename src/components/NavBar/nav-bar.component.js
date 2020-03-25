import React from "react";
import { Navbar } from "react-bootstrap";
import LoggedIn from "@solid/react/module/components/LoggedIn";
import { useWebId } from '@solid/react';
import { LogoutButton } from "@solid/react";


const NavBar = props => {
    const name = useWebId();
    return (

        <section>
            <LoggedIn>
                <Navbar>
                    <a href="#/">
                        <img src={process.env.PUBLIC_URL + "/img/inrupt.svg"} width="200" height="50" />
                    </a>
                    <a href="#/map">
                        <img src={process.env.PUBLIC_URL + "/img/icon/map.svg"} width="40" height="40" /> Map     </a>
                    <a href="#/upload">
                        <img src={process.env.PUBLIC_URL + "/img/icon/upload.svg"} width="40" height="40" /> Upload
                        </a>
                    <a href={name}>
                        <img src={process.env.PUBLIC_URL + "/img/icon/empty-profile.svg"} width="40" height="40" /> Profile
                        </a>
                    <LogoutButton></LogoutButton>

                </Navbar>
            </LoggedIn>
        </section>
    );
}
export default NavBar;
