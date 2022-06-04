import React from "react";
import { NavLink } from "react-router-dom";

const HeaderNav = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex justify-between">
        <li className="text-lg text-blue-100 hover:bg-blue-500 py-1 px-3 rounded-xl transition-all duration-300">
          <NavLink
            to="/"
            exact
            activeClassName="bg-blue-500 py-1 px-3 rounded-xl"
          >
            خانه
          </NavLink>
        </li>
        <li className="mr-7 text-lg text-blue-100 hover:bg-blue-500 py-1 px-3 rounded-xl transition-all duration-300">
          <NavLink
            to="/product"
            activeClassName="bg-blue-500 py-1 px-3 rounded-xl"
          >
            محصولات
          </NavLink>
        </li>
        <li className="mr-7 text-lg text-blue-100 hover:bg-blue-500 py-1 px-3 rounded-xl transition-all duration-300">
          <NavLink
            to="/users"
            activeClassName="bg-blue-500 py-1 px-3 rounded-xl"
          >
            کاربران
          </NavLink>
        </li>
        <li className="mr-7 text-lg text-blue-100 hover:bg-blue-500 py-1 px-3 rounded-xl transition-all duration-300">
          <NavLink
            to="/admin"
            activeClassName="bg-blue-500 py-1 px-3 rounded-xl"
          >
            مدیر
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
