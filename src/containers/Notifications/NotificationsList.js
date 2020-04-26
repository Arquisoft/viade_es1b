import React from "react";
import { useWebId } from "@solid/react";
import { useTranslation } from 'react-i18next';
import { useNotification } from "@inrupt/solid-react-components";
import { DivStyle1, DivStyle } from "./notifications.style";

const NotificationList = docId => {

    const myWebId = useWebId();
    const { t } = useTranslation();
    const {
        notification,
        fetchNotification,
    } = useNotification(myWebId);

    class NotificationClass {

        constructor() {
            this.notificationA = this.handleNotifications()
        }

        async  handleNotifications() {
            const notificationArray = [];
            if (myWebId !== undefined && myWebId !== null) {
                let inbox = myWebId.replace("/profile/card#me", "/inbox/");
                const inboxes = [{ path: inbox, inboxName: 'Global Inbox', shape: 'default' }];
                await fetchNotification(inboxes);
                if (notification.notifications.length > 0)
                    for (let i = 0; i < notification.notifications.length; i++)
                        if (notification.notifications[i].read !== "true")
                            notificationArray.push(notification.notifications[i].summary);
            }
            const ret = await Promise.all(notificationArray);
            return ret;
        }
    }

    var notificationR = new NotificationClass();

    (async () => {
        var notifications = [];
        notifications = await notificationR.notificationA
        var str = '<List>'
        notifications.forEach(function (notification) {
            str += '<li style="list-style-type: none;"><input name="food" type="radio" value=' + notification + ' id = "radio">' + notification + '</li>';
        });
        str += '</List>';
        try {
            document.getElementById("lista").innerHTML = str;
        }
        catch (e) {

        }
    })()

    return (
        <DivStyle1>
            <DivStyle>
                <h3>
                    {t('notifications.information')}
                </h3>
                <div id="lista">

                </div>
            </DivStyle>
        </DivStyle1>
    );
};

export default NotificationList;