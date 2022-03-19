import s from "./styles.module.scss";

import LocationSvg from "../../../../public/assets/navbar/location.svg";
import ArrowDown from "../../../../public/assets/navbar/arrow-down.svg";

function Location() {
  return (
    <>
      <button className={`${s.LocationButton} label-s fc-s5 fw-m gap-025`}>
        <LocationSvg />
        <div>
          <span>Dryve</span> - <span>Ribeirão Preto</span>
        </div>
        <ArrowDown />
      </button>
    </>
  );
}
export default Location;
