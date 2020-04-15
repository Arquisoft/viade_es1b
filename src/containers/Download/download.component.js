import React from "react";
import auth from "solid-auth-client";
import SolidFileClient from "solid-file-client";
import bajarRutas from "./bajarRutas";
import { DivStyle, InputStyle, DivStyle2, DivStyle3 } from './download.style';

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
        id = id.replace('/profile/card#me', '/' + parameter.target.value);
        if (session) {
            this.setState({ direccion: id });
        }
    };

    render() {

        return (
            <DivStyle>
                <DivStyle2>
                    <a>In order to download your routes, write the name of the folder ("Ex: public/routes"). Before going back to the map wait for the notification upscreen in order to verify the download.</a>
                </DivStyle2>
                <DivStyle3>
                    <h3>How to</h3>
                    <InputStyle data-testid="download-input" type="text" onChange={this.obtenerCarpetaPod} placeholder="Write routes address..." />
                    <button data-testid="download-button" onClick={() => bajarRutas.bajarRutasDePod(this.state.direccion)} > <img src={process.env.PUBLIC_URL + "/img/icon/download.svg"} width="25" height="20" alt="" /> </button>
                </DivStyle3>
            </DivStyle>

        );
    }
}

export default DownloadComponent;