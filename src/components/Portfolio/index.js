import React, { useState } from "react";
import Project from "../Project";

export default function Portfolio() {
  const [projects] = useState([
    {
      name: "Kindler",
      classification: "app",
      link: "https://kindler-9621bf2094f8.herokuapp.com/",
      repo: "https://github.com/lyf703331869/kindler",
    },
    {
      name: "Folio Fund",
      classification: "app",
      link: "https://folio-fund-0dd6e496c353.herokuapp.com/",
      repo: "https://github.com/lyf703331869/folio-fund",
    },
    {
      name: "Folio Fund",
      classification: "app",
      link: "https://folio-fund-0dd6e496c353.herokuapp.com/",
      repo: "https://github.com/lyf703331869/folio-fund",
    },
    {
      name: "Cine Review",
      classification: "app",
      link: "https://lyf703331869.github.io/cine-review/",
      repo: "https://github.com/lyf703331869/cine-review",
    },
  ]);
  return (
    <section id="portfolio" class="portfolio">
      <div
        className="container"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1200"
        data-aos-once="true"
      >
        <div class="section-title">
          <h2>Portfolio</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div class="row" data-aos="fade-up" data-aos-delay="100">
          <div class="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">
                All
              </li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div
          class="row portfolio-container"
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
