import React from "react";
import PageHeader from "../../components/Header/PageHeader";
import { useRecoilState } from "recoil";

import { currentProjectSelected } from "../../Recoil/Data/Atoms";

export default function Overview() {
  const [currentProject] = useRecoilState(currentProjectSelected);
  return (
    <div>
      <PageHeader title="Overview"></PageHeader>

      <p>You are currently working on "{currentProject.name}"</p>
      <p>From the menu on top you can edit your list of members.</p>
    </div>
  );
}
