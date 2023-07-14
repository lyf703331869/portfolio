import React from "react";

export default function Home({ setCurrentPage }) {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div
        className="container d-flex flex-column align-items-center"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <h1>Yafei Liu</h1>
        <h2>I'm a professional Web Designer</h2>
        <button
          type="button"
          onClick={() => {
            setCurrentPage({
              name: "about",
            });
          }}
          className="btn btn-outline-success"
        >
          About Me
        </button>
      </div>
    </section>
  );
}
