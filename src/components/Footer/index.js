import React from "react";

export default function Footer() {
  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/lyf703331869",
    },
    {
      name: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/yafeiliu",
    },
  ];

  return (
    <>
      <footer id="footer">
        {icons.map((icon) => (
          <a
            href={icon.link}
            key={icon.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={icon.name}></i>
          </a>
        ))}
        <div className="container">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Yafei Liu</span>
            </strong>
            . All Rights Reserved
          </div>
        </div>
      </footer>
      <div id="preloader"></div>
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
}
