import React from "react";
import { useUser } from "../hooks/useUser";
import { useAuth } from "../hooks/useAuth";

export const DisplayAuth = () => {
  const title = useUser();
  const { isLoggedIn, login, logout } = useAuth();
  return (
    <div className="App">
      <h3>{title} </h3>
      <div> {isLoggedIn ? "Welcome Back" : "Please Login"}</div>
      {!isLoggedIn && <button onClick={login}> login</button>}
      {isLoggedIn && <button onClick={logout}> logout</button>}
    </div>
  );
};
