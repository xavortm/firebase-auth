import React from "react";
import cx from "classnames";
import styles from "./Button.module.scss";

export default function Button({ children, value, clickHandler, type }) {
  let button = (
    <button onClick={clickHandler} className={cx(styles.button)}>
      {children}
    </button>
  );

  if (type === "submit") {
    button = (
      <input
        type="submit"
        value={value}
        onClick={clickHandler}
        className={cx(styles.button)}
      ></input>
    );
  }

  return button;
}
