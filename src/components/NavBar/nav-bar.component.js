import React from "react";
import { Navbar } from "react-bootstrap";
//import LoggedIn from "@solid/react";
import { useWebId} from '@solid/react';
import { LogoutButton } from "@solid/react";


const NavBar = props => {
    const name = useWebId();
    return (

        <section>
            {/* <LoggedIn> */}
                <Navbar>
                    <a href="#/" className="navigation">
                        <img src={process.env.PUBLIC_URL + "/img/inrupt.svg"} width="200" height="50" alt="Home" />
                    </a>
                    <a href="#/map" className="navigation">
                        <img src={process.env.PUBLIC_URL + "/img/icon/map.svg"} width="40" height="40" alt="Map" /> Map     </a>
                    <a href="#/upload" className="navigation">
                        <img src={process.env.PUBLIC_URL + "/img/icon/upload.svg"} width="40" height="40" alt="Upload" /> Upload
                        </a>
                    <a href="#/download" className="navigation">
                        <img src={process.env.PUBLIC_URL + "/img/icon/download.svg"} width="40" height="40" alt="Download" /> Download
                        </a>
                    <a href={name} className="navigation">
                        <img src={process.env.PUBLIC_URL + "/img/icon/empty-profile.svg"} width="40" height="40" alt="Profile" /> Profile
                        </a>                        
                    <LogoutButton></LogoutButton>

                </Navbar>
            {/* </LoggedIn> */}
        </section>
    );
}
export default NavBar;
