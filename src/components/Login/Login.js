import React, { useCallback, useState } from "react";
import { Link, Redirect, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginActions } from "../../store/index";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const login = useSelector((state) => state.login.login);

  const userNameChange = (event) => {
    setUserName(event.target.value);
  };
  const passwordChange = (event) => {
    setPassword(event.target.value);
  };
  const loginHandler = (event) => {
    event.preventDefault();

    fetchUser();
  };
  const fetchUser = useCallback(async () => {
    const response = await fetch(
      "https://site-13ea8-default-rtdb.firebaseio.com/users.json"
    );
    const data = await response.json();
    let loadedUsers = [];

    for (const key in data) {
      loadedUsers.push({
        id: key,
        firstName: data[key].firstName,
        userName: data[key].userName,
        password: data[key].userPassword,
      });
    }

    let findUser = loadedUsers.find(
      (user) => user.userName === userName && user.password === password
    );

    if (findUser) {
      alert("با موفقیت وارد شدید");
    } else {
      alert("ورود با مشکل مواجه شد! اطلاعات خود را دوباره چک یا ثبت نام کنید.");
    }

    if (findUser) {
      dispatch(loginActions.login());
      localStorage.setItem("name", findUser.firstName);
      localStorage.setItem("isLogin", true);
    }

    setUserName("");
    setPassword("");
  }, [dispatch, password, userName]);

  return (
    <div style={{ minHeight: "70vh" }}>
      {!login && (
        <form className="mx-auto w-11/12 md:w-8/12 xl:w-4/12 shadow-custom h-96 rounded-xl">
          <h2 className="text-center text-xl pt-3">فرم ورود</h2>
          <div className="w-11/12 mx-auto mt-8">
            <div className="flex justify-center mb-6">
              <input
                type="text"
                className="border border-blue-400 outline-blue-800 bg-blue-100 px-2 py-2 rounded-xl w-10/12 placeholder:float-right"
                placeholder="نام کاربری"
                value={userName}
                onChange={userNameChange}
              />
            </div>
            <div className="flex justify-center mb-6">
              <input
                type="password"
                className="border border-blue-400 outline-blue-800 bg-blue-100 px-2 py-2 rounded-xl w-10/12 placeholder:float-right"
                placeholder="رمز عبور"
                value={password}
                onChange={passwordChange}
              />
            </div>
          </div>
          <div className="mt-10 w-7/12 mx-auto flex">
            <button
              onClick={loginHandler}
              className="border border-blue-400 bg-blue-800 w-full text-center py-1 rounded-xl text-blue-100 transition-all duration-300 hover:bg-blue-100 hover:text-blue-800"
            >
              ورود
            </button>
          </div>
          <div className="mt-14 flex justify-center text-sm">
            <Link to="/sign-up" className="text-blue-700">حساب کاربری ندارید؟ ثبت نام کنید.</Link>
          </div>
        </form>
      )}
      {login && (
        <Route>
          <Redirect to="/" />
        </Route>
      )}
    </div>
  );
};

export default Login;
