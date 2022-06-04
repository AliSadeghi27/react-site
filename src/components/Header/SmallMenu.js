import React from "react";
import { NavLink } from "react-router-dom";
import { smallMenuActions } from "../../store/index";
import { useSelector, useDispatch } from "react-redux";

const SmallMenu = () => {
  const showSmallMenu = useSelector((state) => state.smallMenu.showSmallMenu);
  const dispatch = useDispatch();

  const hiddenSmallMenu = () => {
    dispatch(smallMenuActions.hide());
  };

  return (
    <>
      {showSmallMenu && (
        <>
          <div className="z-10 w-full h-auto bg-blue-800 fixed">
            <div className="mr-2">
              <button onClick={hiddenSmallMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  className="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path
                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                    fill="#dbeafe"
                  ></path>{" "}
                </svg>
              </button>
            </div>
            <nav>
              <ul className="flex flex-col justify-between px-5 py-3 space-y-2">
                <li className="text-base text-blue-100">
                  <NavLink to="/">خانه</NavLink>
                </li>
                <li className="text-base text-blue-100">
                  <NavLink to="/product">محصولات</NavLink>
                </li>
                <li className="text-base text-blue-100">
                  <NavLink to="/users">کاربران</NavLink>
                </li>
                <li className="text-base text-blue-100">
                  <NavLink to="/admin">مدیر</NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div
            className="z-10 bg-black h-full opacity-60 w-full top-48 fixed"
            onClick={hiddenSmallMenu}
          ></div>
        </>
      )}
    </>
  );
};

export default SmallMenu;
