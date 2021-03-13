import React from "react";
import { Link, useLocation } from "react-router-dom";

import FormLogin from "../components/FormLogin/FormLogin";

export default function Signup() {
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  return (
    <div className="authenticationView">
      <h1>Sign In</h1>
      <FormLogin />
      <p>
        Don't have an account? <Link to="/signup">Create one now</Link>!
      </p>
    </div>
  );
}
