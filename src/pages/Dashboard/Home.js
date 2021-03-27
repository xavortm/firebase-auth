import React from "react";
import PageHeader from "../../components/Header/PageHeader";
import CreateProject from "../../components/FormCreateProject/CreateProject";

export default function Home() {
  return (
    <div>
      <PageHeader title="Welcome"></PageHeader>
      <CreateProject />
    </div>
  );
}
