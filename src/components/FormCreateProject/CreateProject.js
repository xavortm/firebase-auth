import React, { useRef } from "react";
import cx from "classnames";
import { database, auth } from "../../firebase";

import Button from "../../components/Button/Button";
import styles from "./CreateProject.module.scss";
import formStyles from "../Form/Form.module.scss";

// The structure of data we share in the DB as well as the fields we show.

export default function CreateProject() {
  const dbProjects = database.ref("projects");
  const refInputName = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();

    dbProjects.push({
      name: refInputName.current.value,
      owner: auth.currentUser.email,
    });

    console.log(refInputName.current.value);
  };

  return (
    <form onSubmit={handleSubmit} className={cx(formStyles.form, styles.form)}>
      <div className={cx(formStyles.formGroup)}>
        <input
          ref={refInputName}
          name="name"
          type="text"
          placeholder="Name your project?"
        />
      </div>

      <div className={cx(formStyles.formGroup)}>
        <Button type="submit" value="Create new project" />
      </div>
    </form>
  );
}
