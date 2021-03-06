import React, { useRef } from "react";

import formStyles from "../Form/Form.module.scss";

export default function FormLogin() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    // passwordRef.current.value
    // emailRef.current.value
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={formStyles.formGroup}>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" autoComplete="username" ref={emailRef} />
      </div>

      <div className={formStyles.formGroup}>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          ref={passwordRef}
        />
      </div>

      <div className={formStyles.formGroup}>
        <input type="submit" value="Log In" />
      </div>
    </form>
  );
}
