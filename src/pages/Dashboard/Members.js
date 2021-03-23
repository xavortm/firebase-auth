import PageHeader from "../../components/Header/PageHeader";
import AddMember from "../../components/FormAddMember/AddMember";

const demoData = [
  {
    name: "Alex",
    position: "Designer",
    id: 0,
  },
];

export default function Members() {
  const tableHeadings = (
    <tr>
      <th>Name</th>
      <th>Position</th>
    </tr>
  );

  const membersRows = demoData.map((member) => (
    <tr key={member.id}>
      <td>{member.name}</td>
      <td>{member.position}</td>
    </tr>
  ));

  // To be moved to a separate component.
  const membersTable = (
    <table>
      <thead>{tableHeadings}</thead>
      <tbody>{membersRows}</tbody>
    </table>
  );

  return (
    <>
      <PageHeader title="Members">
        <p>From here, you can modify data for your members list.</p>
      </PageHeader>

      <AddMember />

      {/* Commented out for now, not needed as it's static. */}
      {/* {membersTable} */}
    </>
  );
}
