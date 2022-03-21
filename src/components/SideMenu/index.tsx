import s from "./styles.module.scss";

import MenuLinks from "./MenuLinks";

// Simulando possível get com os links.
import menuLinks from "common/menuLinks";

function SideMenu() {
  function checkActive(link_id: number) {
    return link_id === 4 ? true : false;
  }

  return (
    <div className={s.MenuWrapper}>
      <div className={s.MenuLinksWrapper}>
        {menuLinks &&
          menuLinks.map((link) => (
            <MenuLinks
              active={checkActive(link.id)}
              key={`${link.name}-${link.id}`}
              file={link.filename}
              // url={link.url}
            >
              {link.name}
            </MenuLinks>
          ))}
      </div>
    </div>
  );
}

export default SideMenu;
