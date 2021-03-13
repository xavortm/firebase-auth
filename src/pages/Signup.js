import React from "react";
import { Link } from "react-router-dom";
import FormSignup from "../components/FormSignup/FormSignup";

export default function Signup() {
  return (
    <div className="authenticationView">
      <h1>Create an Account</h1>
      <FormSignup />

      <p>
        Already have an account? <Link to="/login">Log in!</Link>
      </p>
    </div>
  );
}
