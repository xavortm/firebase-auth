import { database } from "../firebase";

const ProjectsService = {
  getAll: () => {
    return database.ref("/projects");
  },

  getProjectsOfUser: (uid) => {
    // console.log(uid);
    return database.ref("users/" + uid + "/projects");
  },
};

export default ProjectsService;
