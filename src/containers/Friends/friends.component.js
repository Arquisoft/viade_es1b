import React from 'react';
import { LoggedOut, LoggedIn, useWebId } from '@solid/react';
import { Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MisAmigosDiv, ContainerDiv, ListaDiv, InputStyle, AmigosDiv, ButtonStyle } from './friends.style';
import addFriend from '../../viade/Friends/addFriend';

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
        <div>
            <LoggedIn>
                <ContainerDiv>
                    <ListaDiv>
                        <h3>{t('friends.myFriends')}</h3>
                        <AmigosDiv id="lista">
                        </AmigosDiv>
                        <ButtonStyle onClick={(event) => addFriend.removeFriend(event, name)}>
                            <img src={process.env.PUBLIC_URL + "/img/icon/rubbish.svg"} width="35" height="35" alt="" />
                            {t('friends.remove')}
                        </ButtonStyle>
                        <ButtonStyle>
                            <img src={process.env.PUBLIC_URL + "/img/icon/share.svg"} width="35" height="35" alt="" />
                            {t('friends.share')}
                        </ButtonStyle>
                    </ListaDiv>
                    <MisAmigosDiv>
                        <h3>{t('friends.addFriend')}</h3>
                        <form className="modal-body">
                            <InputStyle type="text" placeholder="https://marshall.solid.community/profile/card#me" id="input" />
                            <button onClick={(event) => addFriend.addFriend(event, document.getElementById('input').value, name)} className="send">
                                <span className="icon">
                                    <img src={process.env.PUBLIC_URL + "/img/icon/arrow.svg"} width="25" height="20" alt="" />
                                </span>
                            </button>
                        </form>
                    </MisAmigosDiv>
                    <ListaDiv>
                        <h3>{t('friends.group')}</h3>
                        <AmigosDiv id="groups">
                        </AmigosDiv>
                        <ButtonStyle>
                            <img src={process.env.PUBLIC_URL + "/img/icon/network.svg"} width="35" height="35" alt="" />
                            {t('friends.add')}
                        </ButtonStyle>
                    </ListaDiv>
                </ContainerDiv>
            </LoggedIn>
            <LoggedOut>
                <Redirect to='/login'></Redirect>
            </LoggedOut>
        </div >
    );
};

export default Friends;