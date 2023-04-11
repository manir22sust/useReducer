import { createContext, useReducer } from "react";
import { INITIAL_STATE, authReducer } from "./authReducer";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);

  const value = {
    ...state,
    login: () => {
      dispatch({ type: "LOGIN" });
    },
    logout: () => {
      dispatch({ type: "LOGOUT" });
    },
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
