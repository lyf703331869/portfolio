import React from "react";
// import { removeHyphensAndCapitalize } from "../../utils/helpers";
import "../../../node_modules/glightbox/src/js/glightbox";
import GLightbox from "glightbox";

export default function Project({ project }) {
  const { name, classification, link } = project;

  return (
    <>
      <div class={"col-lg-4 col-md-6 portfolio-item filter-" + classification}>
        <div class="portfolio-wrap">
          <img
            src={require(`../../assets/projects/${name}.jpg`)}
            class="img-fluid"
            alt=""
          />
          <div class="portfolio-info">
            <h4>{name}</h4>
            <p>{classification}</p>
            <div class="portfolio-links">
              <a
                href={link}
                target="_blank"
                class="portfolio-details-lightbox"
                data-glightbox="type: external"
                title={name}
              >
                <i class="bx bx-link"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
