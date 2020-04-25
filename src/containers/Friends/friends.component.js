import React from 'react';
import { LoggedOut, LoggedIn, useWebId } from '@solid/react';
import { Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ListaDiv, InputStyle, AmigosDiv, ButtonStyle, DivStyle1, ButtonStyle2 } from './friends.style';
import addFriend from '../../viade/Friends/addFriend';
import { NotificationContainer } from "react-notifications";

const Friends = props => {
    const { t } = useTranslation();
    const name = useWebId();
    var friends = [];
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

    return (
        <DivStyle1>
            <LoggedIn>
                <ListaDiv>
                    <h3>{t('friends.addFriend')}</h3>
                    <NotificationContainer />
                    <form className="modal-body">
                        <InputStyle type="text" placeholder="https://marshall.solid.community/profile/card#me" id="input" />
                        <ButtonStyle2 onClick={(event) => addFriend.addFriend(event, document.getElementById('input').value, name, t('friends.added'), t('friends.empty'), t('friends.webIdF'))} className="send">
                            <span className="icon">
                                <img src={process.env.PUBLIC_URL + "/img/icon/arrow.svg"} width="25" height="20" alt="" />
                            </span>
                        </ButtonStyle2>
                    </form>
                    <h3>{t('friends.myFriends')}</h3>
                    <AmigosDiv id="lista">
                    </AmigosDiv>
                    <ButtonStyle onClick={(event) => addFriend.removeFriend(event, name, t('friends.deleted'), t('friends.choose'))}>
                        <img src={process.env.PUBLIC_URL + "/img/icon/rubbish.svg"} width="35" height="35" alt="" />
                        {t('friends.remove')}
                    </ButtonStyle>
                    <ButtonStyle>
                        <img src={process.env.PUBLIC_URL + "/img/icon/share.svg"} width="35" height="35" alt="" />
                        {t('friends.share')}
                    </ButtonStyle>
                </ListaDiv>
                <ListaDiv>
                    <h3>{t('friends.group')}</h3>
                    <AmigosDiv id="groups">
                    </AmigosDiv>
                    <ButtonStyle>
                        <img src={process.env.PUBLIC_URL + "/img/icon/network.svg"} width="35" height="35" alt="" />
                        {t('friends.add')}
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