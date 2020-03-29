import React from "react";
import auth from "solid-auth-client";
import SolidFileClient from "solid-file-client";
import bajarRutas from "./bajarRutas";
import { DivStyle, ButtonStyle, InputStyle } from './download.style';
import { LoggedOut, LoggedIn } from '@solid/react';
import { Redirect } from 'react-router-dom';

class DownloadComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            sfc: new SolidFileClient(auth),
            direccion: "",
            rutas: []
        };
        // Bind es necesario para usar el this
        this.obtenerCarpetaPod = this.obtenerCarpetaPod.bind(this);
    }

    async obtenerCarpetaPod(parameter) {
        parameter.persist();
        let session = await auth.currentSession();
        var id = `${session.webId}`;
        id = id.replace('/profile/card#me', '/'+parameter.target.value);
        if(session) {
        this.setState({ direccion: id });
    }
    };

    render() {

        return (
            // La parte visible de la interfaz
            // El () => es para que no salte automaticamente cada vez que cargue la pagina
            <DivStyle>
                <LoggedIn>
                    <InputStyle type="text" onChange={this.obtenerCarpetaPod} placeholder="Write routes folder..." />
                    <ButtonStyle onClick={() => bajarRutas.bajarRutasDePod(this.state.direccion)} > <img src={process.env.PUBLIC_URL + "/img/icon/download.svg"} width="40" height="40" alt="" /> </ButtonStyle>
                </LoggedIn>
                <LoggedOut>
                    <Redirect to='/login'></Redirect>
                </LoggedOut>
            </DivStyle>
        );
    }
}

export default DownloadComponent;