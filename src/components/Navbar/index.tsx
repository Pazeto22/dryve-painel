import s from "./styles.module.scss";

import DryveLogo from "../../../public/logo/logo-dryve.svg";
import Location from "./Location";
import Actions from "./Actions";
import Profile from "./Profile";

function Navbar() {
  return (
    <div className={`${s.NavbarWrapper}`}>
      <div className="d-flex-ac gap-05">
        <DryveLogo />
        <Location />
      </div>
      <div className="d-flex-ac gap-2">
        <Actions />
        <Profile />
      </div>
    </div>
  );
}

export default Navbar;
