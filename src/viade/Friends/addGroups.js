import auth from 'solid-auth-client';
import SolidFileClient from 'solid-file-client';
const fc = new SolidFileClient(auth, { enableLogging: true });

export const initalize = async () => {
    let session = await auth.currentSession();
    var webId = `${session.webId}`;
    let id = webId.replace('/profile/card#me', '/viade/groups.json');
    if (await fc.itemExists(id)) {

    } else {
        createJson();
    }
}

export const createJson = async () => {

    let session = await auth.currentSession();
    var webId = `${session.webId}`;
    let id = webId.replace('/profile/card#me', '/viade/');

    var tot = '{ "groups": { } }';
    var sdict = JSON.parse(tot);
    var save = JSON.stringify(sdict);

    subirFicheroAPod(id, "groups", save);
}

export const addGroup = async (name) => {

}
export const modifyGroupAdd = async (name, webID) => {

}
export const modifyGroupRemove = async (name, webID) => {

}
export const removeFromAll = async (webID) => {

}

async function subirFicheroAPod(id, name, sdict) {
    //El archivo a subir será:
    let archivo = sdict;
    try {
        await fc.postItem(id + name + ".json", archivo, "application/json", archivo.type);
    }
    catch (error) {
    }

}