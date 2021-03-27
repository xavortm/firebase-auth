import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import cx from "classnames";

import { useAuth } from "../../contexts/AuthContext";
import ProjectsService from "../../services/ProjectsService";

import styles from "./Navigation.module.scss";

const ProjectSelector = ({ currentUser, hideInnerPages }) => {
  const [projectsList, setProjectsList] = useState([]);

  useEffect(() => {
    const onDataChange = (items) => {
      const arr = [];

      items.forEach((item) => {
        arr.push({ ...item.val(), key: item.key });
      });

      setProjectsList(arr);

      if (arr.length > 0) hideInnerPages(false);
    };

    ProjectsService.getProjectsOfUser(currentUser.uid).on(
      "value",
      onDataChange
    );

    return () => {
      ProjectsService.getProjectsOfUser(currentUser.uid).on(
        "value",
        onDataChange
      );
    };
  }, [currentUser.uid, hideInnerPages]);

  const options = projectsList.map((project) => {
    return (
      <option key={project.key} value="project.name">
        {project.name}
      </option>
    );
  });

  if (options.length === 0) return null;

  return (
    <select name="projectPicker" id="projectPicker">
      {options}
    </select>
  );
};

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
          <Link to="/members">Members</Link>
        </li>

        <li>
          <Link to="/projects">Projects</Link>
        </li>
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
