import React from "react";

import FormLogin from "../components/FormLogin/FormLogin";

export default function Signup() {
  return (
    <div className="authenticationView">
      <h1>Sign In</h1>
      <p>
        It's a simple demo website for now. But if you don't have an account,
        you can't really see the dashboard.
      </p>
      <FormLogin />
    </div>
  );
}
