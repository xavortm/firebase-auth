import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  function signup(email, password) {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then()
      .catch((error) => {
        // Not 100% certain how to handle this otherwise.
        console.error(error.message);
      });
  }

  useEffect(() => {
    // When auth.createUserWithEmailAndPassword is called, the
    // auth.onAuthStateChanged is called and will set the current user.
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
