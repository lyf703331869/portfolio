import React from "react";

export default function Header({ children }) {
  return (
    <header className="navbar navbar-default navbar-fixed-top">
      <h1>Yafei Liu</h1>
      {children}
    </header>
  );
}
