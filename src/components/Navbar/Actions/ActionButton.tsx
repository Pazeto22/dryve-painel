import { ReactNode } from "react";

import s from "./styles.module.scss";

interface ActionButtonProps {
  children: ReactNode;
  newNotification?: boolean;
}

function ActionButton({ children, newNotification }: ActionButtonProps) {
  console.log(newNotification);
  return (
    <button className={s.ActionButton}>
      {children}
      {newNotification && (
        <div
          className={`${newNotification ? "shazam" : "d-none"} ${
            s.notificationAlert
          }`}
        />
      )}
    </button>
  );
}

export default ActionButton;
