import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBars, fas, faTimes } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(fas);
import { MenuItems } from "./data/MenuItems";
import "./styles/NavbarStyles.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function NavBar() {
  const [stateIcon, setStateIcon] = useState(false);

  const handleIconClick = () => {
    setStateIcon(!stateIcon);
  };
  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">Trippy</h1>
      <div className="menu-icons" onClick={handleIconClick}>
        <FontAwesomeIcon icon={stateIcon ? faTimes : faBars} />
      </div>
      <ul className={stateIcon ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                <FontAwesomeIcon icon={item.icon} /> {item.title}
              </Link>
            </li>
          );
        })}
        <button>Sign Up</button>
      </ul>
    </nav>
  );
}
