import React from 'react';
import { LoggedOut, LoggedIn, useWebId } from '@solid/react';
import { Redirect } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';
import { MisAmigosDiv, PeticionesDiv, MisPeticionesPendientesDiv } from './friends.style';

const Friends = props => {
    const { t } = useTranslation();
    const name = useWebId();
    return (
        <div>
            <LoggedIn>
                <div>
                    <PeticionesDiv>
                        <h3>PETICIONES DE AMISTAD PENDIENTES</h3>
                    </PeticionesDiv>
                    <MisAmigosDiv>
                        <h3>MIS AMIGOS</h3>
                    </MisAmigosDiv>
                    <MisPeticionesPendientesDiv>
                        <h3>MIS PETICIONES PENDIENTES</h3>
                    </MisPeticionesPendientesDiv>

                </div>
            </LoggedIn>
            <LoggedOut>
                <Redirect to='/login'></Redirect>
            </LoggedOut>
        </div>
    );
};

export default Friends;