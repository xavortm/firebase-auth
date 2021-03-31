import React, { useState } from "react";
import cx from "classnames";
import { database, auth } from "../../firebase";

import Button from "../../components/Button/Button";
import styles from "./CreateProject.module.scss";
import formStyles from "../Form/Form.module.scss";

const writeNewProject = (uid, name, owner) => {
  let projectData = {
    name: name,
    ownerUid: uid,
    owner: owner,
  };

  // Get the key for the new project
  const newProjectKey = database.ref().child("projects").push().key;

  let updates = {};
  updates["/projects/" + newProjectKey] = projectData;
  updates["/users/" + uid + "/projects/" + newProjectKey] = projectData;

  return database.ref().update(updates);
};

export default function CreateProject() {
  const [inputField, setInputField] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    writeNewProject(auth.currentUser.uid, inputField, auth.currentUser.email);
    setInputField("");
  };

  const handleInputChange = (input) => {
    setInputField(input.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cx(formStyles.form, styles.form, formStyles.formInline)}
    >
      <div className={cx(formStyles.formGroup)}>
        <input
          name="name"
          type="text"
          placeholder="Name your project?"
          value={inputField}
          onChange={handleInputChange}
        />
      </div>

      <div className={cx(formStyles.formGroup)}>
        <Button type="submit" value="Create new project" />
      </div>
    </form>
  );
}
