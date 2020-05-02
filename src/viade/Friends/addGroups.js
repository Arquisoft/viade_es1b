import auth from 'solid-auth-client';
import SolidFileClient from 'solid-file-client';
const fc = new SolidFileClient(auth, { enableLogging: true });


//Inicializamos la aplicación básicamente creamos el json que actúa como base de datos.
export const initalize = async () => {
    //Miramos la sesión:
    let session = await auth.currentSession();
    var webId = `${session.webId}`;
    let id = webId.replace('/profile/card#me', '/viade/groups.json');

    //Comprobamos que existe el json de los grupos.
    if (await fc.itemExists(id)) {
        //Comentar esta línea en caso de que el programa ya esté operativo.
        await leerJsonGrupos();
    } else {
        await createJson();
    }
};

export const createJson = async () => {

    //Inicializamos el json...
    let session = await auth.currentSession();
    var webId = `${session.webId}`;
    let id = webId.replace('/profile/card#me', '/viade/');

    var tot = '{"groups":[' +
            '{' +
                '"nombre_grupo":"naruto",'+
                '"participantes":['+
                    '"webId1","webId2"' +
                ']' +
            '},' +
            '{' +
                '"nombre_grupo":"sasuke",' +
                '"participantes":['+
                    '"webId3","webId4"'+
                ']'+
            '}'+
        ']}';

    var sdict = JSON.parse(tot);
    var save = JSON.stringify(sdict);

    subirFicheroAPod(id, "groups", save);
};


export const addGroup = async (groupName) => {
    if (await estaYaElGrupo(groupName)){
        alert("El grupo está creado xd");
    }
    else {
        //Ya tiene la información:
        let jsonObj = await leerJsonGrupos();
        alert(jsonObj);
        let parseadoObj = JSON.parse(jsonObj);

        //Creamos un item con el nombre dado:
        let nuevoGrupo = {
            "nombre_grupo": groupName,
            "participantes": []
        };

        //Creamos el nuevo grupo:
        parseadoObj["groups"][parseadoObj["groups"].length] = nuevoGrupo;

        let objeto = JSON.stringify(parseadoObj);
        alert(objeto);
        await actualizarGrupos(objeto);
    }
};

export const modifyGroupAdd = async (index_grupo, webId) => {
    if (await estaEnElGrupo(index_grupo,webId)){
        alert("Ya está en el grupo");
    }

    else{
        //Tenemos que añadir la persona escogida al grupo seleccionado:
        //Ya tiene la información:
        let jsonObj = await leerJsonGrupos();
        let parseadoObj = JSON.parse(jsonObj);

        //Ahora tenemos que añadir la persona al grupo seleccionado:
        //Primero calculamos cuántas personas hay en el grupo:
        let index_participante=parseadoObj["groups"][index_grupo]["participantes"].length;

        //Y luego añadimos una persona más:
        parseadoObj["groups"][index_grupo]["participantes"][index_participante] = webId;

        //Conforme añadimos la persona debemos de guardar el archivo en el pod:
        let save = JSON.stringify(parseadoObj);
        alert(save);
        await actualizarGrupos(save);

    }

};

export const modifyGroupRemove = async (index_group, index_webID) => {
    //Tenemos que añadir la persona escogida al grupo seleccionado:
    //Ya tiene la información:
    let jsonObj = await leerJsonGrupos();
    let parseadoObj = JSON.parse(jsonObj);

    //Y ahora tenemos que eliminar la persona del grupo:
    parseadoObj["groups"][index_group]["participantes"].splice(index_webID,1);

    //Actualizamos:
    let save = JSON.stringify(parseadoObj);
    alert(save);
    await actualizarGrupos(save);
};

export const removeFromAll = async (webID) => {
    //Eliminamos de todos los grupos...
    //Tenemos que añadir la persona escogida al grupo seleccionado:
};

//Obtenemos los grupos de cada elemento:
export const obtenerGrupos = async () =>    {
    //Ya tiene la información:
    let jsonObj = await leerJsonGrupos();
    let parseadoObj = JSON.parse(jsonObj);

    //Vamos a recorrer hasta el último grupo:
    let ultimo_grupo=parseadoObj["groups"].length;

    let elementos = [];
    for (let i=0; i<ultimo_grupo;i++){
        elementos[elementos.length]=parseadoObj["groups"][i]["nombre_grupo"];
    }

    alert(JSON.stringify(elementos));
    //Cuando acabemos de recorrer los elementos:
    return elementos;
};

export const obtenerParticipantes = async (index_grupo) => {
    //Ya tiene la información:
    let jsonObj = await leerJsonGrupos();
    let parseadoObj = JSON.parse(jsonObj);

    //Vamos a recorrer hasta el último grupo:
    //Primero calculamos cuántas personas hay en el grupo:
    let ultimo_participante=parseadoObj["groups"][index_grupo]["participantes"].length;

    let elementos = [];
    for (let i=0; i<ultimo_participante;i++){
        elementos[elementos.length]=parseadoObj["groups"][index_grupo]["participantes"][i];
    }

    //Imprimos para ver que hace:
    alert(JSON.stringify(elementos));
    //Cuando acabemos de recorrer los elementos:
    return elementos;
};

async function subirFicheroAPod(id, name, sdict) {
    //El archivo a subir será:
    let archivo = sdict;
    try {
        await fc.postItem(id + name + ".json", archivo, "application/json", archivo.type);
    }
    catch (error) {
    }
}

async function leerJsonGrupos(){
    let session = await auth.currentSession();
    var webId = `${session.webId}`;
    let id = webId.replace('/profile/card#me', '/viade/groups.json');
    let informacion = await fc.readFile(id);

    return informacion;
}

//Este método tengo que comprobarlo:
async function estaEnElGrupo(index_grupo,webId){
    //Ya tiene la información:
    let jsonObj = await leerJsonGrupos();
    let parseadoObj = JSON.parse(jsonObj);

    //Vamos a recorrer hasta el último grupo:
    //Creamos un item con el nombre dado:

    //Creamos el nuevo grupo:
    let ultimo_participante = [parseadoObj["groups"][index_grupo]["participantes"].length];
    //En el caso de que esté en el grupo devolvemos:
    for (let i=0; i< ultimo_participante ; i++){
        if(parseadoObj["groups"][index_grupo]["participantes"][i]==webId){
            return true;
        }
    }
    alert("No está xd");
    return false;
}

async function estaYaElGrupo(nombre_grupo){
    //Ya tiene la información:
    let jsonObj = await leerJsonGrupos();
    let parseadoObj = JSON.parse(jsonObj);

    //Vamos a recorrer hasta el último grupo:
    //Primero calculamos cuántas personas hay en el grupo:
    let ultimo_participante=parseadoObj["groups"].length;

    //En el caso de que esté en el grupo devolvemos:
    for (let i=0; i<ultimo_participante;i++){
        if(parseadoObj["groups"][i]["nombre_grupo"]==nombre_grupo){
            return true;
        }
    }
    alert("No está xd");
    return false;
}

async function actualizarGrupos(save)  {
    //Miramos la sesión:
    let session = await auth.currentSession();
    var webId = `${session.webId}`;
    let id = webId.replace('/profile/card#me', '/viade/');

    //Eliminamos el archivo y lo volvemos a subir??? xd
    await fc.deleteFile(id+"groups.json");
    //Y subimos el fichero al pod:
    await subirFicheroAPod(id,"groups",save);
}