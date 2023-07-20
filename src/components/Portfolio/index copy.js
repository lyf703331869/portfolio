import React from "react";
import Project from "../Project";
import Isotope from "isotope-layout";

export default function Portfolio() {
  function filterClass(e) {
    e.preventDefault();
    let portfolioContainer = document.querySelector(".portfolio-container");
    portfolioContainer.childNodes.forEach((el) => {
      el.style.display = "block";
    });
    let portfolioIsotope = new Isotope(portfolioContainer, {
      itemSelector: ".portfolio-item",
    });
    portfolioIsotope.arrange({
      filter: e.target.getAttribute("data-filter"),
    });
  }

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
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li
                data-filter="*"
                onClick={filterClass}
                className="filter-active"
              >
                All
              </li>
              <li data-filter=".filter-app" onClick={filterClass}>
                App
              </li>
              <li data-filter=".filter-web" onClick={filterClass}>
                Web
              </li>
            </ul>
          </div>
        </div>

        <div
          className="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          {projects.map((project, idx) => (
            <Project project={project} key={"project" + idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
