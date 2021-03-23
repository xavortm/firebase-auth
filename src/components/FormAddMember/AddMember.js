import React from "react";
import cx from "classnames";

import Button from "../../components/Button/Button";
import styles from "./AddMember.module.scss";

export default function AddMember() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form was submitted");
  };

  return (
    <form onSubmit={handleSubmit} className={cx(styles.addmember)}>
      <Button type="submit" value="Add new member" />
    </form>
  );
}
