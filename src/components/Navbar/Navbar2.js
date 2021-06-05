import "../Navbar/Navbar2.css";
import { ReactComponent as NotifIcon } from "../icons/bell.svg";
import { ReactComponent as MessengerIcon } from "../icons/messenger.svg";
import { ReactComponent as FlecheIcon } from "../icons/caret.svg";
import { ReactComponent as PanierIcon } from "../icons/panier.svg";
import { ReactComponent as WorldIcon } from "../icons/world-grid.svg";
import { ReactComponent as ProfilIcon } from "../icons/profile.svg";
import { ReactComponent as ChevronIcon } from "../icons/chevron.svg";
// import { ReactComponent as ArrowIcon } from '../icons/arrow.svg';
// import { ReactComponent as BoltIcon } from '../icons/bolt.svg';
// import { ReactComponent as ProfilIcon } from '../icons/user.svg';

import DropdownMenu from "./DropdownMenu";
import "./DropdownMenu.css";
import { Link } from "react-router-dom";
import { Context } from "../../ContextProvider";
import React, { useState, useContext } from "react";

function Navbar3(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav"> {props.children}</ul>
    </nav>
  );
}


function NavItem(props) {
  const [open, setOpen] = useState(false);
  return (
    <li className="nav-item">
      <div className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </div>
      {open && props.children}
    </li>
  );
}

function Navbar2() {
  const context = useContext(Context);

  
  function functiondeco(params) {
    context.setIslog(false);
  }
  return (
    <Navbar3>
      <div className="rightt">
        {context.islog && (
          <Link style={{ marginTop: "13px" }} to="/cart">
            {" "}
            <NavItem icon={<PanierIcon />}></NavItem>
          </Link>
        )}

{!context.islog && (
          <Link style={{ marginTop: "13px" }} to="/login">
            {" "}
            <NavItem icon={<ProfilIcon />} />
          </Link>
         )}


         
        <div className="navi18 " style={{ marginTop: "13px" }}>
          <NavItem icon={<WorldIcon />}>
            <DropdownMenu />
          </NavItem>
        </div>
      </div>
    </Navbar3>
  );
}

export default Navbar2;
