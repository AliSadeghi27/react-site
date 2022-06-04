import React, { useState } from "react";
import { Link, Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const login = useSelector((state) => state.login.login);

  const signUpUsers = (event) => {
    event.preventDefault();

    let userPassword = "";

    if (password === repeatPassword) {
      if (password <= 6 || repeatPassword <= 6) {
        userPassword = password;
      } else {
        alert("رمز عبور حداقل باید 6 کاراکتر داشته باشد");
        setPassword("");
        setRepeatPassword("");
        return;
      }
    } else {
      alert("رمز عبور باید با تکرار رمز عبور مطابقت داشته باشد");
      setPassword("");
      setRepeatPassword("");
      return;
    }

    let userData;
    if (firstName && lastName && userName && userPassword) {
      userData = { firstName, lastName, userName, userPassword };
    } else {
      alert("لطفا تمام ورودی هارا پر کنید.");
      return;
    }

    if (userData) {
      fetch("https://site-13ea8-default-rtdb.firebaseio.com/users.json", {
        method: "post",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(userData),
      });
    }

    clearInputValue();

    alert("ثبت نام با موفقیت انجام شد :)");
  };
  const clearInputValue = () => {
    setFirstName("");
    setLastName("");
    setUserName("");
    setPassword("");
    setRepeatPassword("");
  };
  const firstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const lastNameChange = (event) => {
    setLastName(event.target.value);
  };
  const userNameChange = (event) => {
    setUserName(event.target.value);
  };
  const passwordChange = (event) => {
    setPassword(event.target.value);
  };
  const repeatPasswordChange = (event) => {
    setRepeatPassword(event.target.value);
  };

  return (
    <div style={{ minHeight: "80vh" }}>
      {!login && (
        <form className="mx-auto w-11/12 md:w-8/12 xl:w-4/12 shadow-custom h-auto rounded-xl">
          <h2 className="text-center text-xl pt-3">فرم ثبت نام</h2>
          <div className="w-11/12 mx-auto mt-8">
            <div className="flex justify-center mb-6">
              <input
                type="text"
                className="border border-blue-400 outline-blue-800 bg-blue-100 px-2 py-1 rounded-xl w-10/12 placeholder:float-right"
                placeholder="نام"
                value={firstName}
                onChange={firstNameChange}
                autoFocus
              />
            </div>
            <div className="flex justify-center mb-6">
              <input
                type="text"
                className="border border-blue-400 outline-blue-800 bg-blue-100 px-2 py-1 rounded-xl w-10/12 placeholder:float-right"
                placeholder="نام خانوادگی"
                value={lastName}
                onChange={lastNameChange}
              />
            </div>
            <div className="flex justify-center mb-6">
              <input
                type="text"
                className="border border-blue-400 outline-blue-800 bg-blue-100 px-2 py-1 rounded-xl w-10/12 placeholder:float-right"
                placeholder="نام کاربری"
                value={userName}
                onChange={userNameChange}
              />
            </div>
            <div className="flex justify-center mb-6">
              <input
                type="password"
                className="border border-blue-400 outline-blue-800 bg-blue-100 px-2 py-1 rounded-xl w-10/12 placeholder:float-right"
                placeholder="رمز عبور ( حداقل 6 کاراکتر )"
                value={password}
                onChange={passwordChange}
              />
            </div>
            <div className="flex justify-center mb-6">
              <input
                type="password"
                className="border border-blue-400 outline-blue-800 bg-blue-100 px-2 py-1 rounded-xl w-10/12 placeholder:float-right"
                placeholder="تکرار رمز عبور"
                value={repeatPassword}
                onChange={repeatPasswordChange}
              />
            </div>
          </div>
          <div className="mt-10 w-7/12 mx-auto flex">
            <button
              onClick={signUpUsers}
              className="border border-blue-400 bg-blue-800 w-full text-center py-1 rounded-xl text-blue-100 transition-all duration-300 hover:bg-blue-100 hover:text-blue-800"
            >
              ثبت نام
            </button>
          </div>
          <div className="mt-14 pb-12 flex justify-center text-sm text-blue-700">
            <Link to="/login">حساب کاربری دارید؟ وارد شوید.</Link>
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

export default SignUp;
