import React from 'react';
import { LoggedOut, LoggedIn, useWebId } from '@solid/react';
import { Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MisAmigosDiv, ContainerDiv, ListaDiv, InputStyle, AmigosDiv } from './friends.style';
import addFriend from '../../viade/Friends/addFriend';

const Friends = props => {
    const { t } = useTranslation();
    const name = useWebId();
    var friends = [];
    (async () => {
        friends = await addFriend.friends
        var str = '<List>'
        friends.forEach(function (friend) {
            str += '<li style="list-style-type: none;"><input name="food" type="radio" value="dairy">' + friend + '</li>';
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
                        <button>
                            <img src={process.env.PUBLIC_URL + "/img/icon/eraser.svg"} width="40" height="40" alt="" />
                        </button>
                        <button>
                            <img src={process.env.PUBLIC_URL + "/img/icon/share.svg"} width="40" height="40" alt="" />
                        </button>
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
                </ContainerDiv>
            </LoggedIn>
            <LoggedOut>
                <Redirect to='/login'></Redirect>
            </LoggedOut>
        </div>
    );
};

export default Friends;