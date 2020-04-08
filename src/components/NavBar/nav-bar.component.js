import React from "react";
//import LoggedIn from "@solid/react/module/components/LoggedIn";
import { useWebId } from '@solid/react';
import { DivStyle, NavStyle, ButtonStyle, Astyle } from './nav-bar.style';
import { DropdownButton, DropdownItem } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import i18n from 'i18next';


const NavBar = props => {

    const name = useWebId();
    const { t } = useTranslation();


    return (
        //<LoggedIn>
            <NavStyle>
                <a href="#/"><img src={process.env.PUBLIC_URL + "/img/inrupt.svg"} width="200" height="50" alt="" /></a>
                <DivStyle><Astyle href="#/map"><img src={process.env.PUBLIC_URL + "/img/icon/map.svg"} width="20" height="20" alt="" />{t('navBar.map')}</Astyle></DivStyle>
                <DivStyle><Astyle href="#/upload"><img src={process.env.PUBLIC_URL + "/img/icon/upload.svg"} width="20" height="20" alt="" /> {t('navBar.upload')}</Astyle></DivStyle>
                <DivStyle><Astyle href="#/download"><img src={process.env.PUBLIC_URL + "/img/icon/download.svg"} width="20" height="20" alt="" /> {t('navBar.download')}</Astyle></DivStyle>
                <DivStyle><Astyle href={name}><img src={process.env.PUBLIC_URL + "/img/icon/empty-profile.svg"} width="20" height="20" alt="" /> {t('navBar.profile')}</Astyle></DivStyle>
                <DivStyle>
                    <DropdownButton variant="white" title={""}>
                        <DropdownItem>
                            <div onClick={() => i18n.changeLanguage("en")}> ENG </div>
                        </DropdownItem>
                        <DropdownItem>
                            <div onClick={() => i18n.changeLanguage("es")}> ESP </div>
                        </DropdownItem>
                    </DropdownButton>
                </DivStyle>
                <DivStyle><ButtonStyle></ButtonStyle></DivStyle>

            </NavStyle>
        //</LoggedIn>

    );
}
export default NavBar;
