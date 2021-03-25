import PageHeader from "../../components/Header/PageHeader";
import AddMember from "../../components/FormAddMember/AddMember";
import TableMembers from "../../components/TableMembers/TableMembers";

import styles from "./Members.module.scss";

export default function Members() {
  return (
    <>
      <PageHeader title="Members">
        <p>From here, you can modify data for your members list.</p>
      </PageHeader>

      <div className={styles.addMember}>
        <h3>Add a new member:</h3>
        <AddMember />
      </div>

      <h3>A list of existing members:</h3>
      <TableMembers />
    </>
  );
}
