// import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as GiIcons from "react-icons/gi";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
    show: true,
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Products",
    path: "/product",
    icon: <GiIcons.GiChelseaBoot />,
    cName: "nav-text",
  },

  {
    title: "Contact",
    path: "/contact",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
 
  {
    title: "Cart",
    path: "/cart",
    icon: <FaIcons.FaCartArrowDown />,
    cName: "nav-text",
  },
];
