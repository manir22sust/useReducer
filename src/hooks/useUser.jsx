import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("The useUser must be inside in UserProvider ");
  }
  return context;
};
