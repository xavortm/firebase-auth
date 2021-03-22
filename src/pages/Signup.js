import React from "react";
import { Link } from "react-router-dom";
import FormSignup from "../components/FormSignup/FormSignup";

export default function Signup() {
  return (
    <div className="authenticationView">
      <h1>Create an Account</h1>
      <p>
        Your user data is stored in{" "}
        <a href="https://firebase.google.com/" target="_blank">
          Firebase
        </a>
        .
      </p>
      <FormSignup />
    </div>
  );
}
