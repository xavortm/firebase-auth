import React, { useState } from "react";
import cx from "classnames";
import { database } from "../../firebase";
import { useRecoilState } from "recoil";

import Button from "../../components/Button/Button";
import memberStyles from "./AddMember.module.scss";
import tableStyles from "../Table/Table.module.scss";
import { currentProjectSelected } from "../../Recoil/Data/Atoms";

// The structure of data we share in the DB as well as the fields we show.
const userDataStructure = {
  name: {
    value: "",
  },
  position: {
    value: "",
  },
  date: {
    value: "",
  },
};

export default function AddMember() {
  const [currentProject] = useRecoilState(currentProjectSelected);

  // Holds our reference to the members database data.
  const membersRef = database.ref(
    "projects/" + currentProject.key + "/members"
  );
  const [inputData, setInputData] = useState(userDataStructure);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputData.name.value !== "" && inputData.position.value !== "") {
      membersRef.push(inputData);
      setInputData(userDataStructure);
    }
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
    <form
      onSubmit={handleSubmit}
      className={cx(tableStyles.addmember, memberStyles)}
    >
      <header className={cx(tableStyles.formRow)}>
        <div className={cx(tableStyles.formCell)}>
          <span>Name</span>
        </div>
        <div className={cx(tableStyles.formCell)}>
          <span>Position</span>
        </div>
        <div className={cx(tableStyles.formCell)}>
          <span>Joined</span>
        </div>
      </header>

      <div className={cx(tableStyles.formRow)}>
        <div className={cx(tableStyles.formCell)}>
          <input
            onChange={handleInputChange}
            name="name"
            type="text"
            value={inputData.name.value}
            placeholder="What's the name?"
          />
        </div>
        <div className={cx(tableStyles.formCell)}>
          <input
            onChange={handleInputChange}
            name="position"
            type="text"
            value={inputData.position.value}
            placeholder="In what position?"
          />
        </div>
        <div className={cx(tableStyles.formCell)}>
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
