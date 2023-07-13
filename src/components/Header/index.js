import React from "react";

export default function Header({ children }) {
  return (
    <header className="flex-row space-between px-1">
      <h1>Yafei Liu</h1>
      {children}
    </header>
  );
}
