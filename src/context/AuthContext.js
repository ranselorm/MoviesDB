import { createContext, useContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  function Signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function Login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  return (
    <AuthContext.Provider value={{ Signup, Login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
