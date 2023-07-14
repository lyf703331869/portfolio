import React from "react";
import PageContent from "../PageContent";
import Home from "../Home";
import About from "../About";
import Portfolio from "../Portfolio";
import Contact from "../Contact";
import Resume from "../Resume";
import { capitalizeFirstLetter } from "../../utils/helpers";

export default function Page({ setCurrentPage, currentPage }) {
  const renderPage = () => {
    switch (currentPage.name) {
      case "home":
        return <Home setCurrentPage={setCurrentPage} />;
      case "about":
        return <About />;
      case "portfolio":
        return <Portfolio />;
      case "contact":
        return <Contact />;
      case "resume":
        return <Resume />;
      default:
        return <Home />;
    }
  };

  return (
    <section>
      <PageContent>{renderPage()}</PageContent>
    </section>
  );
}
