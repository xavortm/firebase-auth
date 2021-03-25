import { database } from "../firebase";

const db = database.ref("/members");

const MembersService = {
  getAll: () => {
    return db;
  },
};

export default MembersService;
