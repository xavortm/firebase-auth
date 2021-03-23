import React from "react";
import FormSignup from "../components/FormSignup/FormSignup";

export default function Signup() {
  return (
    <div className="authenticationView">
      <h1>Create an Account</h1>
      <p>
        Your user data is stored in{" "}
        <a href="https://firebase.google.com/" target="_blank" rel="noreferrer">
          Firebase
        </a>
        .
      </p>
      <FormSignup />
    </div>
  );
}
