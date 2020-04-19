import React from "react";
import Button from '@inrupt/solid-react-components'
import { space } from "rdf-namespaces";
import { fetchDocument } from "tripledoc";
import { useWebId } from "@solid/react";
import { useTranslation } from 'react-i18next';

async function getNNotifications() {
    const auth = require("solid-auth-client");
    const FC = require("solid-file-client");
    const fc = new FC(auth);

    let session = await auth.currentSession();

    const profileDocument = await fetchDocument(session.webId);
    const profile = profileDocument.getSubject(session.webId);

    const storage = profile.getRef(space.storage);


    let folder;
    await fc.readFolder(storage + "/inbox/")
        .then((content) => { folder = content; })
        .catch((err) => (folder = null));
    let result = 0;
    if (folder) {
        result = folder.files.length;
    }
    return result;
}

const NotificationList = (myWebId) => {
    const { t } = useTranslation();
    console.log(myWebId);
    let str = myWebId.myWebId;
    console.log(str);
    let webid = String(String(useWebId()).replace(myWebId, "inbox"));

    class Notification extends React.Component {

        _isMounted = false;

        constructor(props) {
            super(props);
            this.state = {
                nNotifications: "",
                inboxUrl: webid
            };
        }

        componentDidMount() {
            this._isMounted = true;
            this.updateNotifications();
        }

        componentWillUnmount() {
            this._isMounted = false;
        }

        async updateNotifications() {
            var num = String(await getNNotifications());
            if (this._isMounted) {
                this.setState({
                    nNotifications: num,
                });
            }
        }
        

        render() {
            return (
                <div>
                <p>
                   {t('notificaciones.informacion')}: {this.state.nNotifications}
                    
                    <button
                        className="btn"
                        text={t('notificaciones.informacion')}

                        disabled={false}
                        onClick={() => this.updateNotifications()}
                    />
                </p>
                <p>
                    <a href={this.state.inboxUrl}>{t('notificaciones.informacion')}</a>
                </p>
                </div>
            );
        }
    }

    return (<Notification />);
};

export default NotificationList;