import React, { useState, useEffect } from "react";
import Project from "../Project";
import Isotope from "isotope-layout";

export default function Portfolio() {
  const [filterKey, setFilterKey] = useState("*");
  const [isotope, setIsotope] = useState(null);

  useEffect(() => {
    setIsotope(new Isotope(".portfolio-container"));
  }, []);

  useEffect(() => {
    if (isotope) {
      isotope.arrange({ filter: `${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterKeyChange = (e) => {
    let portfolioFilters = document.querySelectorAll("#portfolio-flters li");
    portfolioFilters.forEach(function (el) {
      el.classList.remove("filter-active");
    });
    e.target.classList.add("filter-active");
    setFilterKey(e.target.getAttribute("data-filter"));
  };

  const projects = [
    {
      name: "Kindler",
      classification: "web",
      link: "https://kindler-9621bf2094f8.herokuapp.com/",
      repo: "https://github.com/lyf703331869/kindler",
    },
    {
      name: "Folio Fund",
      classification: "web",
      link: "https://folio-fund-0dd6e496c353.herokuapp.com/",
      repo: "https://github.com/lyf703331869/folio-fund",
    },
    {
      name: "Cine Review",
      classification: "web",
      link: "https://lyf703331869.github.io/cine-review/",
      repo: "https://github.com/lyf703331869/cine-review",
    },
    {
      name: "Npm Package",
      classification: "app",
      link: "https://www.npmjs.com/package/quick-readme-generator",
      repo: "https://github.com/lyf703331869/quick-readme-generator",
    },
  ];
  return (
    <section id="portfolio" className="portfolio">
      <div
        className="container"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1200"
        data-aos-once="true"
      >
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Below please feel free to see some of my recent projects.</p>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters" onClick={handleFilterKeyChange}>
              <li data-filter="*" className="filter-active">
                All
              </li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div
          className="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {projects.map((project, idx) => (
            <Project project={project} key={"project" + idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
