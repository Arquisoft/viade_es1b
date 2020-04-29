import React from "react";
import { useWebId } from "@solid/react";
import { useTranslation } from "react-i18next";
import { useNotification } from "@inrupt/solid-react-components";
import { DivStyle1, DivStyle, H4Style, DivStyle2, H6Style } from "./notifications.style";

var i = 0;
var notifs = [];
var NotificationList = (docId) => {

  const myWebId = useWebId();
  const { t } = useTranslation();
  const { notification, fetchNotification } = useNotification(myWebId);
  var notificationArray = [];
  var ret = [];
  var str = "";
  const handleNotifications = async () => {
    if (myWebId !== undefined && myWebId !== null) {
      let inbox = myWebId.replace("/profile/card#me", "/inbox/");
      const inboxes = [
        { path: inbox, inboxName: "Global Inbox", shape: "default" },
      ];
      await fetchNotification(inboxes);
      if (notification.notifications.length > 0) {
        for (let i = 0; i < notification.notifications.length; i++) {
          if (notification.notifications[i].read !== "true") {
            notificationArray.push(notification.notifications[i].summary);
          }
        }
      }
    }
    ret = await Promise.all(notificationArray);
    str = "<List>";
    ret.forEach(function (notification) {
      str += "<li key= " + notification + "><a>" + notification + "</a></li>";
    });
    str += "</List>";
    try {
      document.getElementById("lis").innerHTML = str;
    } catch (e) {
      ret = [];
    }
    notifs = ret;
  }

  if (i < 5) {
    handleNotifications();
    i++;
  } else {
    str = "<List>";
    notifs.forEach(function (notification) {
      str += "<li key= " + notification + "><a>" + notification + "</a></li>";
    });
    str += "</List>";
    try {
      document.getElementById("lis").innerHTML = str;
    } catch (e) {
      ret = [];
    }
  }

  return (
    <DivStyle1>
      <DivStyle>
        <H4Style data-testid="notifications-title">
          {t("notifications.information")}
        </H4Style>
        <H6Style>{t("notifications.information2")}</H6Style>
        <DivStyle2 id="lis" data-testid="notifications-list">
          <ul>
            <li>Cargando</li>
          </ul>
        </DivStyle2>
      </DivStyle>
    </DivStyle1 >
  );
};

export default NotificationList;
