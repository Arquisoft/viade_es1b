import auth from "solid-auth-client";
import data from '@solid/query-ldflex';
import FC from 'solid-file-client';

class AddFriend {

    constructor() {
        this.webId = "";
        this.friends = this.getFriends();
    }

    async addFriend(event, id, webId) {
        event.preventDefault();

        const user = data[webId];
        if (await this.checkID(id)) {
            if (id.localeCompare("") !== 0) {
                if (await this.friendAlreadyAdded(id, webId))
                    alert('¡Ya sois amigos!');
                else {
                    await user.knows.add(data[id]);
                    await window.location.reload();
                }
            } else
                alert('Este campo no puede estar vacío');
        } else
            alert("WebId no existe")
    };

    async removeFriend(id, webId) {
        const user = data[webId];
        if (await this.checkID(id)) {
            if (id.localeCompare("") !== 0) {
                if (await this.friendAlreadyAdded(id, webId)) {
                    await user.knows.removeFriend(data[id]);
                    await window.location.reload();
                    alert('Amigo eliminado');
                }
                else
                    alert('no sois amigos');
            }
        } else
            alert("WebId no existe")
    };

    async checkID(id) {
        const fc = new FC(auth);
        let session = await auth.currentSession();
        if (!session)
            session = await auth.login();
        try {
            let op = async client => await client.itemExists(id);
            return await op(fc);
        } catch (e) {
        }
    }

    async friendAlreadyAdded(id, webId) {
        const user = data[webId];
        for await (const friend of user.friends)
            if (String(friend).localeCompare(String(id)) === 0)
                return true;
        return false;
    };

    async getFriends() {
        const friends = [];
        let session = await auth.currentSession();
        var id = `${session.webId}`;
        const user = data[id];
        for await (const friend of user.friends)
            friends.push(friend.toString());
        const users = await Promise.all(friends);
        return users;
    };


}
export default AddFriend = new AddFriend();