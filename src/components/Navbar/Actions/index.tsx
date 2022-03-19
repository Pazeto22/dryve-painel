import { useState } from "react";

import s from "./styles.module.scss";

import ActionButton from "./ActionButton";

import NotificationIcon from "../../../../public/assets/navbar/bell.svg";
import ConfigIcon from "../../../../public/assets/navbar/cog.svg";

function Actions() {
  const [newNotification, setNewNotification] = useState(true);
  return (
    <div className="d-flex-ac gap-1">
      <ActionButton newNotification={newNotification}>
        <NotificationIcon />
      </ActionButton>
      <ActionButton>
        <ConfigIcon />
      </ActionButton>
    </div>
  );
}

export default Actions;
