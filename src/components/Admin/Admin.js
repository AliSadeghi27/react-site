import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const Admin = () => {
  const login = useSelector((state) => state.login.login);

  return (
    <div style={{minHeight: '80vh'}}>
      {login && (
        <div className="mx-auto w-10/12 border-4 border-dashed border-blue-800 h-96 flex items-center">
          <div className="w-11/12 flex flex-col md:flex-row bg-blue-100 shadow-xl justify-between items-center p-5 my-5 rounded-xl h-auto mx-auto">
            <p>علی</p>
            <p>صادقی</p>
            <p>abc.sadeghi27@gmail.com</p>
          </div>
        </div>
      )}
      {!login && (
        <Route>
          <Redirect to="/login" />
        </Route>
      )}
    </div>
  );
};

export default Admin;
