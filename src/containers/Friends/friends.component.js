import React from 'react';
import { LoggedOut, LoggedIn, useWebId } from '@solid/react';
import { Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MisAmigosDiv, ContainerDiv, PeticionesDiv, InputStyle } from './friends.style';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import addFriend from '../../viade/Friends/addFriend';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '90%',
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'auto',
    },
    listSection: {
        backgroundColor: 'inherit',
    },
}));



const Friends = props => {
    const { t } = useTranslation();
    const name = useWebId();
    const classes = useStyles();
    var friends = [];
    friends = addFriend.getFriends(name);
    //console.log(friends);


    return (
        <div>
            <LoggedIn>
                <ContainerDiv>
                    <MisAmigosDiv>
                        <h3>{t('friends.myFriends')}</h3>
                        <form className="modal-body">
                            <InputStyle type="text" placeholder="https://marshall.solid.community/profile/card#me" id="input" />
                            <button onClick={(event) => addFriend.addFriend(event, document.getElementById('input').value, name)} className="send">
                                <span className="icon">
                                    <img src={process.env.PUBLIC_URL + "/img/icon/arrow.svg"} width="25" height="20" alt="" />
                                </span>
                            </button>
                        </form>
                        <List className={classes.root} subheader={<li />}>

                        </List>
                    </MisAmigosDiv>
                    <PeticionesDiv>
                        <h3>{t('friends.myFriends')}</h3>
                        <List className={classes.root} subheader={<li />}>
                            {Array(friends).map((i) => (
                                <ListItem key={i} className={classes.listSection}>
                                    <button>{console.log(friends)}</button>
                                </ListItem>
                            ))}
                        </List>
                    </PeticionesDiv>
                </ContainerDiv>
            </LoggedIn>
            <LoggedOut>
                <Redirect to='/login'></Redirect>
            </LoggedOut>
        </div>
    );
};

export default Friends;