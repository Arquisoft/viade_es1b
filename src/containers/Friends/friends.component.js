import React from 'react';
import { useWebId } from '@solid/react';
import { useTranslation } from 'react-i18next';
import { MisAmigosDiv, ContainerDiv, ListaDiv, InputStyle, AmigosDiv, ButtonStyle } from './friends.style';
import addFriend from '../../viade/Friends/addFriend';
import { NotificationContainer } from "react-notifications";

const Friends = props => {
    const { t } = useTranslation();
    const name = useWebId();
    var friends = [];
    (async () => {
        try {
            friends = await addFriend.friends
            var str = '<List>'
            friends.forEach(function (friend) {
                str += '<li style="list-style-type: none;"><input name="food" type="radio" value=' + friend + ' id = "radio">' + friend + '</li>';
            });
            str += '</List>';

            document.getElementById("lista").innerHTML = str;
        }
        catch (e) {

        }
    })()

    return (
        <section>
            <NotificationContainer />
            <ContainerDiv>
                <ListaDiv>
                    <h3>{t('friends.myFriends')}</h3>
                    <AmigosDiv id="lista">
                    </AmigosDiv>
                    <ButtonStyle id="removeFriend-button" data-testid="remove-button" onClick={(event) => addFriend.removeFriend(event, name, t('friends.deleted'), t('friends.choose'))}>
                        <img src={process.env.PUBLIC_URL + "/img/icon/rubbish.svg"} width="35" height="35" alt="" />
                        {t('friends.remove')}
                    </ButtonStyle>
                    <ButtonStyle data-testid="share-button">
                        <img src={process.env.PUBLIC_URL + "/img/icon/share.svg"} width="35" height="35" alt="" />
                        {t('friends.share')}
                    </ButtonStyle>
                </ListaDiv>
                <MisAmigosDiv data-testid="add-friend">
                    <h3>{t('friends.addFriend')}</h3>
                    <form className="modal-body">
                        <InputStyle type="text" placeholder="https://marshall.solid.community/profile/card#me" id="input-webid" />
                        <button data-testid="add-friend-button" id="add-friend-button" onClick={(event) => addFriend.addFriend(event, document.getElementById('input-webid').value, name, t('friends.added'), t('friends.empty'), t('friends.webIdF'))} className="send">
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
                    <ButtonStyle data-testid="friend-group-button">
                        <img src={process.env.PUBLIC_URL + "/img/icon/network.svg"} width="35" height="35" alt="" />
                        {t('friends.add')}
                    </ButtonStyle>
                </ListaDiv>
            </ContainerDiv>
        </section >
    );
};

export default Friends;