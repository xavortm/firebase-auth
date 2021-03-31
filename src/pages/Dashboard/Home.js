import React from "react";
import PageHeader from "../../components/Header/PageHeader";
import CreateProject from "../../components/FormCreateProject/CreateProject";

export default function Home() {
  return (
    <div>
      <PageHeader title="Welcome"></PageHeader>
      <p>
        You need to create a project if you don't have one already in order to
        start managing data.
      </p>
      <CreateProject />
    </div>
  );
}
