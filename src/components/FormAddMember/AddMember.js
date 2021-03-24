import React, { useState } from "react";
import cx from "classnames";

import Button from "../../components/Button/Button";
import styles from "./AddMember.module.scss";

export default function AddMember() {
  const [inputData, setInputData] = useState({
    name: {
      value: "",
    },
    position: {
      value: "",
    },
    date: {
      value: "",
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputData);
  };

  const handleInputChange = (e) => {
    setInputData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: {
          value: e.target.value,
        },
      };
    });
  };

  return (
    <form onSubmit={handleSubmit} className={cx(styles.addmember)}>
      <header className={cx(styles.formRow)}>
        <div className={cx(styles.formCell)}>
          <span>Name</span>
        </div>
        <div className={cx(styles.formCell)}>
          <span>Position</span>
        </div>
        <div className={cx(styles.formCell)}>
          <span>Joined</span>
        </div>
      </header>

      <div className={cx(styles.formRow)}>
        <div className={cx(styles.formCell)}>
          <input
            onChange={handleInputChange}
            name="name"
            type="text"
            value={inputData.name.value}
            placeholder="What's the name?"
          />
        </div>
        <div className={cx(styles.formCell)}>
          <input
            onChange={handleInputChange}
            name="position"
            type="text"
            value={inputData.position.value}
            placeholder="In what position?"
          />
        </div>
        <div className={cx(styles.formCell)}>
          <input
            onChange={handleInputChange}
            name="date"
            type="text"
            value={inputData.date.value}
            placeholder="When did he/she joined?"
          />
        </div>
      </div>

      <Button type="submit" value="Add new member" />
    </form>
  );
}
