import React from "react";

const styles = {
  font: {
    color: "white",
    textShadow: "black 0.1em 0.1em 0.2em",
  },
  paragraph: {
    color: "#505050",
    margin: "0.5em 0 1em 0",
  },
};

export default function Home({ setCurrentPage }) {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div
        className="container d-flex flex-column align-items-center"
        data-aos="zoom-in"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        <h1 style={styles.font}>Yafei Liu</h1>
        <h2 style={styles.paragraph}>
          I'm a professional Web Developer from NYC
        </h2>
        <button
          type="button"
          onClick={() => {
            setCurrentPage({
              name: "about",
            });
          }}
          className="btn btn-primary"
        >
          About Me
        </button>
      </div>
    </section>
  );
}
