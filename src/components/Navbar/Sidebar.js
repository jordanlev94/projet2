import React, { useState, useContext } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Sidebar.css";
import { IconContext } from "react-icons";

import { Context } from "../../ContextProvider";

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const context = useContext(Context);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="Sidebar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="Sidebar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className="nav-text">
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            {context.islog ? (
              <li className="nav-text">
                <div
                  className="logoutcss"
                  onClick={() => context.setIslog(false)}
                >
                  <AiIcons.AiOutlineTeam />
                  <span>{"Logout"}</span>
                </div>
              </li>
            ) : (
              <li className="nav-text">
                <Link to={"/login"}>
                  <AiIcons.AiOutlineTeam />
                  <span>{"Login"}</span>
                </Link>
              </li>
            )}


{!context.islog && (   
<li className='nav-text'>

<Link to={"/register"}>
<AiIcons.AiOutlineSolution/>
<span> {" S'inscrire"} </span>
</Link>
</li>
)}







          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Sidebar;
