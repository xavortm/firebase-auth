import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";

import ProjectsService from "../../services/ProjectsService";
import { currentProjectSelected } from "../../Recoil/Data/Atoms";

const ProjectSelector = ({ currentUser, hideInnerPages }) => {
  const [currentProject, setCurrentProject] = useRecoilState(
    currentProjectSelected
  );

  const [projectsList, setProjectsList] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const onDataChange = (items) => {
      const arr = [];

      items.forEach((item) => {
        arr.push({ ...item.val(), key: item.key });
      });

      if (arr.length > 0) {
        hideInnerPages(false);
      } else {
        return;
      }

      setProjectsList(arr);
      setCurrentProject({
        name: arr[0].name,
        key: arr[0].key,
      });
      // history.push("/project/" + arr[0].key + "/");
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
  }, [currentUser.uid, hideInnerPages, history, setCurrentProject]);

  const handleSelect = (e) => {
    setCurrentProject(projectsList[e.target.selectedIndex]);
    history.push("/");
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
