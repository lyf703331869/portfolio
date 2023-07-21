import React from "react";

export default function Project({ project }) {
  const { name, classification, link } = project;

  return (
    <>
      <div
        className={"col-lg-4 col-md-6 portfolio-item filter-" + classification}
      >
        <div className="portfolio-wrap">
          <img
            src={require(`../../assets/projects/${name}.jpg`)}
            className="img-fluid"
            alt=""
          />
          <div className="portfolio-info">
            <h4>{name}</h4>
            <p>{classification}</p>
            <div className="portfolio-links">
              <a
                href={link}
                target="_blank"
                className="portfolio-details-lightbox"
                data-glightbox="type: external"
                title={name}
              >
                <i className="bx bx-link"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
