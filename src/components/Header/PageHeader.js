import React from "react";

export default function PageHeader({ title, children }) {
  return (
    <header>
      <h1>{title}</h1>

      {children}
    </header>
  );
}
