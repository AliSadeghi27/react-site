import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginActions } from "../../store/index";
import { smallMenuActions } from "../../store/index";
import SmallMenu from "./SmallMenu";
import HeaderNav from "./HeaderNav";

const Header = () => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login.login);
  const showSmallMenu = useSelector((state) => state.smallMenu.showSmallMenu);

  const logoutHandler = () => {
    localStorage.clear();
    dispatch(loginActions.logout());
  };
  const smallMenuHandler = () => {
    dispatch(smallMenuActions.show());
  };

  return (
    <>
      {!login && (
        <div className="bg-blue-800 h-12 md:h-14 flex justify-center items-center mb-24">
          <h1 className="text-blue-100 font-bold text-3xl">علی صادقی</h1>
        </div>
      )}
      {login && (
        <div className="relative">
          {showSmallMenu && <SmallMenu />}
          <div className="bg-blue-800 h-14 flex items-center mb-24">
            <div className="w-11/12 flex justify-between items-center mx-auto">
              <HeaderNav />
              <button onClick={smallMenuHandler} className="pt-1 md:hidden">
                <img
                  src="https://s6.uupload.ir/files/menu_lcvy.png"
                  alt="menu"
                />
              </button>
              <button
                onClick={logoutHandler}
                className="border border-blue-100 px-5 py-1 rounded-md text-blue-100 hover:text-blue-800
            hover:bg-blue-100 transition-all duration-300"
              >
                خروج
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
