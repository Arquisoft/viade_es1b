import React from "react";
import auth from "solid-auth-client";
import SolidFileClient from "solid-file-client";
import { LoggedOut, LoggedIn } from '@solid/react';
import { Redirect } from 'react-router-dom';
import { DivStyle, ButtonStyle, InputStyle } from './upload.style';



class UploadComponent extends React.Component {
    constructor() {
        super();
        //Instanciamos la variable, con let
        this.state = {
            //Estos son los ficheros, con file[0] accederíamos al primero, que es nuestro caso.
            files: null,
            direccion: "https://marshall6399.solid.community/public/",
            //Creamos el file solid client:
            //Hay que hacer los 4 pasos que dice el githun de SolidFileClient
            sfc: new SolidFileClient(auth)

        };
        //Bindeamos porque vamos a interactuar con files:
        this.itemHandler = this.itemHandler.bind(this);
        this.subirFicheroAPod = this.subirFicheroAPod.bind(this);
    }

    //Esto es lo que hacemos cuando llamamos al método.
    itemHandler(parameter) {
        this.setState({ files: parameter.target.files });
    };

    async subirFicheroAPod() {
        //El archivo a subir será:
        let archivo = this.state.files[0];
        //Analizamos si está loggeado:
        let session = await auth.currentSession();
        if (session) {
            alert("Estás loggeado");
            if (this.state.files[0] == null)
                //Si el fichero es nulo:
                alert("No has seleccionado ningún fichero")
            else {
                try {
                    alert(this.state.direccion + archivo.name);
                    await this.state.sfc.putFile(this.state.direccion + archivo.name, archivo, archivo.type);
                    alert("Archivo subido");
                }
                catch (error) {
                    console.error(error);
                }
            }
        }
        else
            alert("No estás loggeado");
    }



    render() {
        return (
            //Tras coger el item funciona el botón:
            <DivStyle>
                <LoggedIn>
                    <InputStyle type="file" onChange={this.itemHandler} />
                    <ButtonStyle onClick={this.subirFicheroAPod} > Upload </ButtonStyle>
                </LoggedIn>
                <LoggedOut>
                    <Redirect to='/login'></Redirect>
                </LoggedOut>
            </DivStyle>

        );
    }
}

export default UploadComponent;