import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import cx from "classnames";

import { useAuth } from "../../contexts/AuthContext";

import ProjectSelector from "./ProjectSelector";
import styles from "./Navigation.module.scss";

export default function Navigation() {
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const [hideInnerPages, setHideInnerPages] = useState(true);

  async function handleLogout() {
    try {
      await logout();
      history.push("/login");
    } catch (error) {
      console.error("failed to logout", error);
    }
  }

  return (
    <nav className={cx(styles.menu)}>
      <ul className={cx(styles.primaryMenu)}>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li className={hideInnerPages && cx(styles.hideInner)}>
          <ProjectSelector
            hideInnerPages={setHideInnerPages}
            currentUser={currentUser}
          />
        </li>

        <li>
          <Link to="/:projectid/members">Members</Link>
        </li>

        <li>{/* <Link to="/projects">Projects</Link> */}</li>
      </ul>

      <ul className={cx(styles.secondaryMenu)}>
        <li>
          <button onClick={handleLogout}>Log out</button>
        </li>

        <li className={cx(styles.simulatedButton)}>{currentUser.email}</li>
      </ul>
    </nav>
  );
}
