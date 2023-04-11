import { createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const title = "useReducer";
  return <UserContext.Provider value={title}>{children}</UserContext.Provider>;
};
