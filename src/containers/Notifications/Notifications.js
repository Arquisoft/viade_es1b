import React from 'react';
import { useTranslation } from "react-i18next";
import { LoggedOut, LoggedIn, useWebId } from '@solid/react';
import { ContainerDiv, NotificationsDiv, MisNotificaciones } from './notifications.style';
//CSS
//La otra parte de la tabla
import NotificationList from "./NotificationsList";

export const Notifications = () => {
    const { t } = useTranslation();
    const webId = useWebId();

    return (

        <ContainerDiv>
            <NotificationsDiv>
                <NotificationList myWebId={webId}>

                </NotificationList>

            </NotificationsDiv>
        </ContainerDiv>

    )
}
export default Notifications;