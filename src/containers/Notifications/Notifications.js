import React from 'react';
import {useTranslation} from "react-i18next";
import { LoggedOut, LoggedIn, useWebId } from '@solid/react';
import { ContainerDiv,NotificationsDiv,MisNotificaciones } from './notifications.style';
//CSS
//La otra parte de la tabla
import NotificationsList  from "./NotificationsList";

export const Notifications=() =>{
    const {t}=useTranslation();
    const webId=useWebId();

    return (
        <div>
        <LoggedIn>
            <ContainerDiv>
                <NotificationsDiv>
                    <NotificationsList myWebId={webId}>

                    </NotificationsList>

                </NotificationsDiv>
            </ContainerDiv>
        </LoggedIn>
      <LoggedOut>
        <Redirect to='/login'></Redirect>
      </LoggedOut>
      </div>
    )
}
export default Notifications;