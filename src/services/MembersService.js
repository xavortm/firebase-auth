import { database } from "../firebase";

const MembersService = {
  getAll: (id) => {
    return database.ref("/projects/" + id + "/members");
  },
};

export default MembersService;
