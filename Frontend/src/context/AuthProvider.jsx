import React, { createContext, useState, useContext } from 'react';
import Cookies from "js-cookie";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const initialUserState =
    Cookies.get("jwt") || localStorage.getItem("ChatApp");

  let parsedUser;
  try {
    parsedUser = initialUserState ? JSON.parse(initialUserState) : undefined;
  } catch {
    parsedUser = undefined;
  }

  const [authUser, setAuthUser] = useState(parsedUser);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;