import React, { useRef, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import cx from "classnames";

import { useAuth } from "../../contexts/AuthContext";
import formStyles from "../Form/Form.module.scss";

export default function FormLogin() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const { login } = useAuth();
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const errorOutput = errors ? (
    <p className={cx(formStyles.notification, formStyles.notificationError)}>
      {errors}
    </p>
  ) : null;

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setErrors("");
      setLoading(true);

      // Try to add the user to Firebase
      await login(emailRef.current.value, passwordRef.current.value);

      history.push("/");
    } catch {
      setErrors("Could not login.");
    }

    setLoading(false);
  }

  return (
    <form className={cx(formStyles.form)} onSubmit={handleSubmit}>
      <div className={cx(formStyles.formGroup)}>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" autoComplete="username" ref={emailRef} />
      </div>

      <div className={cx(formStyles.formGroup)}>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          ref={passwordRef}
        />
      </div>

      <div className={cx(formStyles.formGroup, formStyles.formGroupSubmit)}>
        <input disabled={loading} type="submit" value="Log In" />
      </div>

      {errorOutput}

      <p className={cx(formStyles.formFooter)}>
        Don't have an account? <Link to="/signup">Create one now</Link>!
      </p>
    </form>
  );
}
