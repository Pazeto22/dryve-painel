import { ReactNode } from "react";
import Image from "next/image";

import s from "./styles.module.scss";

interface MenuLinksProps {
  children: ReactNode;
  active: boolean;
  file: string;
  // url: string;
}

function MenuLinks({ children, active, file }: MenuLinksProps) {
  return (
    <a
      className={`${s.SideMenuLinkWrapper} ${
        active ? `${s.SideMenuLinkActive} fc-white` : "fc-s5"
      } p-05 gap-05 u-none`}
      // href={url}
    >
      <span className={`${s.SideMenuLinkIcon} d-flex-acjc`}>
        <Image
          src={`/assets/menu/links/${file}.svg`}
          alt={`ícone referente ao link ${children}`}
          height={30}
          width={30}
        />
      </span>{" "}
      <span className="label-m fw-m">{children}</span>
    </a>
  );
}

export default MenuLinks;
