import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import formStyles from "../Form/Form.module.scss";

export default function FormLogin() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const { login } = useAuth();
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

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
    <form className={formStyles.form} onSubmit={handleSubmit}>
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
        <input disabled={loading} type="submit" value="Log In" />
      </div>

      <p>{errors}</p>
    </form>
  );
}
