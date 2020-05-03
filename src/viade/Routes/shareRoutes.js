import auth from "solid-auth-client";
import SolidFileClient from "solid-file-client";
import { NotificationManager } from "react-notifications";

export const sharing = async (
  friendId,
  shareUrl,
  addr,
  exito,
  errorm,
  double
) => {
  var ret = 0;
  try {
    var sfc = new SolidFileClient(auth);
    var content = await sfc.readFile(shareUrl);
    friendId = friendId.replace("profile/card#me", addr);
    if (await sfc.itemExists(friendId)) {
      NotificationManager.success("", double, 3000);
      ret = -1;
    } else {
      await sfc.postFile(friendId, content, "application/json");
      NotificationManager.success("", exito, 3000);
      ret = 1;
    }
  } catch (error) {
    NotificationManager.error("", errorm, 3000);
    ret = -1;
  }
  return await ret;
};
