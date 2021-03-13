import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";

export default function Signup() {
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    try {
      await logout();
      history.push("/login");
    } catch (error) {
      console.error("failed to logout", error);
    }
  }

  return (
    <div className="appHome">
      <h1>Home</h1>
      <p>Logged in with email {currentUser.email}</p>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
}
