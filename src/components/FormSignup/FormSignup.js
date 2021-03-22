import React, { useRef, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import cx from "classnames";

import { useAuth } from "../../contexts/AuthContext";
import formStyles from "../Form/Form.module.scss";

export default function FormSignup() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const { signup } = useAuth();
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setErrors("Passwords do not match");
    }

    try {
      setErrors("");
      setLoading(true);

      // Try to add the user to Firebase
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setErrors("User could not be created.");
    }

    setLoading(false);
  }

  return (
    <form className={cx(formStyles.form)} onSubmit={handleSubmit}>
      <div className={cx(formStyles.formGroup)}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" autoComplete="username" ref={emailRef} />
      </div>

      <div className={cx(formStyles.formGroup)}>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          autoComplete="new-password"
          ref={passwordRef}
        />
      </div>

      <div className={cx(formStyles.formGroup)}>
        <label htmlFor="password">Confirm Password:</label>
        <input
          type="password"
          id="confirm-password"
          autoComplete="new-password"
          ref={confirmPasswordRef}
        />
      </div>

      <div className={cx(formStyles.formGroup, formStyles.formGroupSubmit)}>
        <input disabled={loading} type="submit" value="Create account"></input>
      </div>

      {errors}

      <p className={cx(formStyles.formFooter)}>
        Already have an account? <Link to="/login">Log in!</Link>
      </p>
    </form>
  );
}
