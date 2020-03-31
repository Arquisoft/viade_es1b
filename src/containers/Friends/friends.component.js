import React from 'react';
import { LoggedOut, LoggedIn } from '@solid/react';
import { Redirect } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';
import { MisAmigosDiv, PeticionesDiv, MisPeticionesPendientesDiv, ContainerDiv } from './friends.style';

const Friends = props => {
    const { t } = useTranslation();
    return (
        <div>
            <LoggedIn>
                <ContainerDiv>
                    <PeticionesDiv>
                        <h3>{t('friends.sentRequest')}</h3>
                    </PeticionesDiv>
                    <MisAmigosDiv>
                        <h3>{t('friends.myFriends')}</h3>
                    </MisAmigosDiv>
                    <MisPeticionesPendientesDiv>
                        <h3>{t('friends.recievedRequest')}</h3>
                    </MisPeticionesPendientesDiv>

                </ContainerDiv>
            </LoggedIn>
            <LoggedOut>
                <Redirect to='/login'></Redirect>
            </LoggedOut>
        </div>
    );
};

export default Friends;