import ldflex from "@solid/query-ldflex";
import auth from "solid-auth-client";
import data from '@solid/query-ldflex';

const reload = () => {
    window.location.reload();
};
class AddFriend {

    constructor() {
        this.webId = "";
    }

    async addFriend(event, id, webId) {
        event.preventDefault();
        try {
            const user = data[webId];
            if (this.isFriend(id) && id.localeCompare("") !== 0) {
                if (await this.friendAlreadyAdded(id, webId)) {
                    alert('WebId ya pertenece a tus amigos');
                } else {
                    await user.knows.add(data[id]);
                    await reload();
                }
            } else {
                alert('WebId no válido');
            }
        } catch (e) {
            alert(e.message, 'Error');
        }
    };

    async friendAlreadyAdded(friendWebId, webId) {
        const user = data[webId];

        for await (const friend of user.friends) {
            if (String(friend).localeCompare(String(friendWebId)) === 0) {
                console.log(friend.toString());
                return true;
            }
        }
        return false;
    };

    async isFriend(id) {
        const auth = require("solid-auth-client");
        await auth.trackSession(session => {
            if (!session)
                return;
            else
                this.webId = session.webId;

        });
        for await (const friend of ldflex[this.webId].friends)
            if (String(friend).localeCompare(String(id)) === 0)
                return await true;
        return await false;
    };

    async getFriends() {
        const friends = [];
        let session = await auth.currentSession();
        var id = `${session.webId}`;
        const user = data[id];
        for await (const friend of user.friends) {
            friends.push(friend.toString());


        }
        const users = await Promise.all(friends);
        return users;
    };


}
export default AddFriend = new AddFriend();