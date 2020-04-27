import React from 'react';
import { LoggedOut, LoggedIn, useWebId } from '@solid/react';
import { Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ListaDiv, InputStyle, AmigosDiv, ButtonStyle, DivStyle1, ButtonStyle2, H3Style } from './friends.style';
import { useNotification } from "@inrupt/solid-react-components";
import addFriend from '../../viade/Friends/addFriend';
import { NotificationContainer, NotificationManager } from "react-notifications";

const Friends = props => {
    const { t } = useTranslation();
    const name = useWebId();
    var friends = [];
    const { createNotification, discoverInbox } = useNotification(
        name
    );
    (async () => {
        friends = await addFriend.friends
        var str = '<List>'
        friends.forEach(function (friend) {
            str += '<li style="list-style-type: none;"><input name="food" type="radio" value=' + friend + ' id = "radio">' + friend + '</li>';
        });
        str += '</List>';
        try {
            document.getElementById("lista").innerHTML = str;
        }
        catch (e) {

        }
    })()

    const sendNotification = async (title, friendId, summary) => {
        var names = name.split(".");
        var shortName = names[0];
        shortName = shortName.replace("https://", "");
        try {
            const inbox = await discoverInbox(friendId);
            if (!inbox)
                NotificationManager.error("", t('notifications.inboxFail'), 3000);
            createNotification(
                {
                    title: title,
                    summary: shortName + summary,
                    actor: name
                },
                inbox
            );
        } catch (error) {
            NotificationManager.error("", t('notifications.error'), 3000);
        }
    };

    function addFriendS() {
        addFriend.addFriend(document.getElementById('input').value, name, t('friends.added'), t('friends.empty'), t('friends.webIdF')).then(ret => {
            if (ret === 1)
                sendNotification(t('notifications.titleAdd'), document.getElementById('input').value, t('notifications.summaryAdd'));
        });
    }

    return (
        <DivStyle1>
            <LoggedIn>
                <ListaDiv>
                    <H3Style>{t('friends.addFriend')}</H3Style>
                    <NotificationContainer />

                    <InputStyle type="text" placeholder="https://marshall.solid.community/profile/card#me" id="input" />
                    <ButtonStyle2 onClick={addFriendS} className="send">
                        <span className="icon">
                            <img src={process.env.PUBLIC_URL + "/img/icon/arrow.svg"} width="25" height="20" alt="" />
                        </span>
                    </ButtonStyle2>

                    <H3Style>{t('friends.myFriends')}</H3Style>
                    <AmigosDiv id="lista">
                    </AmigosDiv>
                    <ButtonStyle onClick={(event) => addFriend.removeFriend(event, name, t('friends.deleted'), t('friends.choose'))}>
                        <img src={process.env.PUBLIC_URL + "/img/icon/rubbish.svg"} width="35" height="35" alt="" />
                        {t('friends.remove')}
                    </ButtonStyle>
                </ListaDiv>
                <ListaDiv>
                    <H3Style>{t('friends.group')}</H3Style>
                    <AmigosDiv id="groups">
                    </AmigosDiv>
                    <ButtonStyle>
                        <img src={process.env.PUBLIC_URL + "/img/icon/network.svg"} width="35" height="35" alt="" />
                        {t('friends.add')}
                    </ButtonStyle>
                    <ButtonStyle>
                        <img src={process.env.PUBLIC_URL + "/img/icon/mas.svg"} width="35" height="35" alt="" />
                        {t('friends.addG')}
                    </ButtonStyle>
                </ListaDiv>
            </LoggedIn>
            <LoggedOut>
                <Redirect to='/login'></Redirect>
            </LoggedOut>
        </DivStyle1 >
    );
};

export default Friends;