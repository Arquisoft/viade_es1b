import auth from "solid-auth-client";
import SolidFileClient from "solid-file-client";
import { NotificationManager } from "react-notifications";
import { useNotification } from "@inrupt/solid-react-components";

let session1=auth.currentSession();
var name1=`${session1.webId}`;
const { createNotification, discoverInbox } = useNotification(
    name1
);

const sendNotification = async (title, friendId, summary,inboxFail,inboxerror) => {
    let session = await auth.currentSession();
    if (session) {
        var name = `${session.webId}`;
    }
    try {
        const inbox = await discoverInbox(friendId);
        if (!inbox)
            NotificationManager.error("", inboxFail, 3000);
        createNotification(
            {
                title: title,
                summary: name + summary,
                actor: name
            },
            inbox
        );
    } catch (error) {
        NotificationManager.error("",inboxerror, 3000);
    }
};

export const sharing = async (friendId, shareUrl, addr, exito, errorm, double,titulo,summary,inboxFail,inboxerror) => {
    try {
        var sfc = new SolidFileClient(auth);
        var content = await sfc.readFile(shareUrl)
        var aux= friendId;
        friendId = friendId.replace("profile/card#me", addr);
        console.log(friendId);
        if (await sfc.itemExists(friendId)) {
            NotificationManager.success("", double, 3000);
        }
        else {
            await sfc.postFile(friendId, content, "application/json")
            NotificationManager.success("", exito, 3000);
            sendNotification(titulo,aux,summary, inboxFail,inboxerror);
        }
    } catch (error) {
        NotificationManager.error("", errorm, 3000);
    }

};
