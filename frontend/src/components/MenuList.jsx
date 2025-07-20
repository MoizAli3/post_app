import React from "react";
import { Link } from "react-router";

function MenuList({ text, route = "/", icon, onClick }) {
  return (
    <li>
      <button
        href="#"
        className="flex items-center p-2 w-full text-md text-gray-500 rounded-lg dark:text-white hover:bg-gray-100 hover:text-pink-400 dark:hover:bg-gray-700 group"
        onClick={onClick}
      >
        {icon}
        <span className="ms-2">{<Link to={route}>{text}</Link>} </span>
      </button>
    </li>
  );
}

export default MenuList;
