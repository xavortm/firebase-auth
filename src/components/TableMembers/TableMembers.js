import React, { useEffect, useState, useRef } from "react";
import cx from "classnames";

import tableStyles from "../Table/Table.module.scss";
import MembersService from "../../services/MembersService";

export default function TableMembers() {
  const [membersList, setMembersList] = useState([]);

  const onDataChange = (items) => {
    let members = [];

    items.forEach((item) => {
      let key = item.key;
      let data = item.val();

      members.push({
        key: key,
        name: data.name,
        position: data.position,
        date: data.date,
      });
    });

    setMembersList(members);
  };

  useEffect(() => {
    MembersService.getAll().on("value", onDataChange);

    return () => {
      MembersService.getAll().on("value", onDataChange);
    };
  }, []);

  const membersRows = membersList.map((member) => {
    return (
      <div key={member.key} className={cx(tableStyles.formRow)}>
        <div className={cx(tableStyles.formCell)}>
          <span>{member.name.value}</span>
        </div>
        <div className={cx(tableStyles.formCell)}>
          <span>{member.position.value}</span>
        </div>
        <div className={cx(tableStyles.formCell)}>
          <span>{member.date.value}</span>
        </div>
      </div>
    );
  });

  return (
    <div className={cx(tableStyles.table)}>
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
      {membersRows}
    </div>
  );
}
