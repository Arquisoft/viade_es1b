import React from 'react';
import { LoggedOut, LoggedIn } from '@solid/react';
import { Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MisAmigosDiv, ContainerDiv } from './friends.style';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

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
    const classes = useStyles();
    var arrayAmigos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3,]; //deberia llamarse a una funcion que obtenga el listado de amigos 
    //en la funcion onClick de los botones hay que anañir las funciones relativas a la accion que se quiere realizar

    return (
        <div>
            <LoggedIn>
                <ContainerDiv>
                    <MisAmigosDiv>
                        <h3>{t('friends.myFriends')}</h3>
                        <List className={classes.root} subheader={<li />}>
                            {arrayAmigos.map((sectionId) => (
                                <li key={`section-${sectionId}`} className={classes.listSection}>
                                    <ListItem key={`prueba`}>
                                        <button>prueba</button>
                                    </ListItem>
                                </li>
                            ))}
                        </List>
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