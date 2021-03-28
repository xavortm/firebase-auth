import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import ProjectsService from "../../services/ProjectsService";

const ProjectSelector = ({ currentUser, hideInnerPages }) => {
  const [projectsList, setProjectsList] = useState([]);
  const [currentProject, setCurrentProject] = useState();
  const history = useHistory();

  useEffect(() => {
    const onDataChange = (items) => {
      const arr = [];

      items.forEach((item) => {
        arr.push({ ...item.val(), key: item.key });
      });

      setProjectsList(arr);
      setCurrentProject(arr[0].name);
      history.push("/" + arr[0].key + "/");

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
  }, [currentUser.uid, hideInnerPages, history]);

  const handleSelect = (e) => {
    setCurrentProject(e.target.value);
    console.log(e.target.selectedIndex);
    history.push("/" + projectsList[e.target.selectedIndex].key + "/");
  };

  const options = projectsList.map((project) => {
    return (
      <option key={project.key} value={project.name}>
        {project.name}
      </option>
    );
  });

  if (options.length === 0) return null;

  return (
    <select
      value={currentProject}
      onChange={handleSelect}
      name="projectPicker"
      id="projectPicker"
    >
      {options}
    </select>
  );
};

export default ProjectSelector;
