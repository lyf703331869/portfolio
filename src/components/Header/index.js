import React from "react";

export default function Header({ children }) {
  return (
    <header className="navbar fixed-top navbar-expand-lg navbar-light bg-body-secondary">
      <div className="container-fluid">
        <h1 className="navbar-brand mb-0 h1">Yafei</h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {children}
      </div>
    </header>
  );
}
