import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

export default function Nav(props) {
  const { pages = [], setCurrentPage, currentPage } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage.name);
  }, [currentPage]);

  return (
    <nav className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        {pages.map((Page) => (
          <li
            className={`mx-5 nav-item ${
              currentPage.name === Page.name && "navActive"
            }`}
            data-bs-toggle="collapse"
            data-bs-target=".navbar-collapse.show"
            key={Page.name}
          >
            <span
              className="nav-link"
              onClick={() => {
                setCurrentPage(Page);
              }}
            >
              {capitalizeFirstLetter(Page.name)}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
