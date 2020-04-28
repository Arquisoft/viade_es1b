import React, { useState } from "react";
import { useWebId } from "@solid/react";
import { useTranslation } from "react-i18next";
import {
  ListaDiv,
  InputStyle,
  AmigosDiv,
  ButtonStyle,
  DivStyle1,
  ButtonStyle2,
  ButtonStyle3,
  H3Style,
} from "./friends.style";
import { useNotification } from "@inrupt/solid-react-components";
import AddFriend from "../../viade/Friends/addFriend";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const Friends = (props) => {
  const { t } = useTranslation();
  const name = useWebId();

  var [amigos, setAmigos] = useState([]);
  const { createNotification, discoverInbox } = useNotification(name);

  const sendNotification = async (titles, friendId, summary) => {
    var names = name.split(".");
    var shortName = names[0];
    shortName = shortName.replace("https://", "");
    try {
      const inbox = await discoverInbox(friendId);
      if (!inbox)
        NotificationManager.error("", t("notifications.inboxFail"), 3000);
      createNotification(
        {
          title: titles,
          summary: shortName + summary,
          actor: name,
        },
        inbox
      );
    } catch (error) {
      NotificationManager.error("", t("notifications.error"), 3000);
    }
  };

  function addFriendS() {
    AddFriend.addFriend(
      document.getElementById("input-webid").value,
      name,
      t("friends.added"),
      t("friends.empty"),
      t("friends.webIdF")
    ).then((ret) => {
      if (ret === 1) {
        sendNotification(
          t("notifications.titleAdd"),
          document.getElementById("input-webid").value,
          t("notifications.summaryAdd")
        );
        NotificationManager.error("", t("friends.addeds"), 3000);
      }
    });
  }

  const refresh = async () => {
    var friends = [];
    friends = await AddFriend.getFriends();
    friends.forEach(function (friend) {
      if (amigos.includes(friend.toString()) === false)
        setAmigos((amigos) => [...amigos, friend]);
    });
    setAmigos(friends);
  };

  const style = {
    listStyleType: "none",
  };

  return (
    <DivStyle1>
      <ListaDiv onLoad={refresh}>
        <H3Style>{t("friends.addFriend")}</H3Style>
        <InputStyle
          type="text"
          placeholder="https://marshall.solid.community/profile/card#me"
          data-testid="input-webid"
          id="input-webid"
        />
        <ButtonStyle3 onClick={refresh} id="refresh-button">
          {" "}
          <img
            src={process.env.PUBLIC_URL + "/img/icon/refresh.svg"}
            width="25"
            height="20"
            alt=""
          />
        </ButtonStyle3>
        <ButtonStyle2
          onClick={addFriendS}
          data-testid="add-friend-button"
          id="add-friend-button"
          className="send"
        >
          <span className="icon">
            <img
              src={process.env.PUBLIC_URL + "/img/icon/arrow.svg"}
              width="25"
              height="20"
              alt=""
            />
          </span>
        </ButtonStyle2>

        <H3Style>{t("friends.myFriends")}</H3Style>
        <AmigosDiv id="lista" className="lista">
          {amigos.map((item) => (
            <li style={style}>
              <input name="food" type="radio" value={item} id="radio"></input>
              {item}
            </li>
          ))}
        </AmigosDiv>
        <ButtonStyle
          id="removeFriend-button"
          data-testid="remove-button"
          onClick={(event) =>
            AddFriend.removeFriend(
              event,
              name,
              t("friends.deleted"),
              t("friends.choose")
            )
          }
        >
          <img
            src={process.env.PUBLIC_URL + "/img/icon/rubbish.svg"}
            width="35"
            height="35"
            alt=""
          />
          {t("friends.remove")}
        </ButtonStyle>
        <NotificationContainer />
      </ListaDiv>
      <ListaDiv>
        <H3Style>{t("friends.group")}</H3Style>
        <AmigosDiv id="groups"></AmigosDiv>
        <ButtonStyle data-testid="friend-group-button">
          <img
            src={process.env.PUBLIC_URL + "/img/icon/network.svg"}
            width="35"
            height="35"
            alt=""
          />
          {t("friends.add")}
        </ButtonStyle>
      </ListaDiv>
    </DivStyle1>
  );
};

export default Friends;
