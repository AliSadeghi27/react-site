import React, { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchUsers = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://react-site-667ef-default-rtdb.firebaseio.com/users.json"
      );
      const data = await response.json();
      const loadedUsers = [];

      for (const key in data) {
        loadedUsers.push({
          id: key,
          firstName: data[key].firstName,
          lastName: data[key].lastName,
          userName: data[key].userName,
        });
      }

      setUsers(loadedUsers);
    } catch {
      setError(true);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  let divClass;

  if (users.length > 4) {
    divClass = "h-auto";
  } else {
    divClass = "h-96";
  }

  const login = useSelector((state) => state.login.login);

  return (
    <div style={{minHeight: '80vh'}}>
      {login && (
        <div
          className={
            "mx-auto w-11/12 border-4 border-dashed border-blue-800 flex items-center flex-col lg:w-10/12 " +
            divClass
          }
        >
          {!isLoading &&
            !error &&
            users.map((user) => (
              <div
                className="w-11/12 flex flex-col md:flex-row bg-blue-100 shadow-xl justify-between items-center p-5 my-5 rounded-xl h-auto"
                key={user.id}
              >
                <p>{user.firstName}</p>
                <p>{user.lastName}</p>
                <p>{user.userName}</p>
              </div>
            ))}
          {isLoading && (
            <p className="py-40 text-3xl text-blue-900">
              در حال بارگذاری کاربران ...
            </p>
          )}
          {users.length === 0 && !error && !isLoading && (
            <p className="py-40 text-3xl text-blue-900">کاربری پیدا نشد</p>
          )}
          {error && !isLoading && (
            <p className="py-40 text-3xl text-blue-900">
              در بارگذاری کاربران مشکلی به وجود آمد!
            </p>
          )}
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

export default Users;
