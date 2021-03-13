import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then()
      .catch((error) => {
        // Not 100% certain how to handle this otherwise.
        console.error(error.message);
      });
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  useEffect(() => {
    // When auth.createUserWithEmailAndPassword is called, the
    // auth.onAuthStateChanged is called and will set the current user.
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);

      // Need to have a loading state because the current user is not
      // set by default, due to the firebase authentication running on page load.
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
