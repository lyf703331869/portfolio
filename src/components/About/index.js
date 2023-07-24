import React from "react";
import avatar from "../../assets/bg/avatar.jpg";
import PureCounter from "@srexi/purecounterjs";
import { Waypoint } from "react-waypoint";
import { setProcess } from "../../utils/helpers";

export default function About() {
  return (
    <>
      {/* ------------------ About ------------------ */}

      <section id="about" className="about">
        <div
          className="container"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1200"
          data-aos-once="true"
        >
          <div className="section-title">
            <h2>About</h2>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <img src={avatar} className="img-fluid" alt="Avatar" />
            </div>
            <div className="col-lg-8 mt-5 pt-4 pt-lg-0 content">
              <h3>Full stack web developer</h3>
              <p className="fst-italic"></p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <strong>Website: </strong>
                      lyf703331869.github.io/portfolio/
                    </li>
                    <li>
                      <strong>Phone: </strong> +1 (929) 204-6236
                    </li>
                    <li>
                      <strong>City: </strong>New York, USA
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <strong>Degree: </strong>Master
                    </li>
                    <li>
                      <strong>PhEmailone: </strong>yafeiliunyc@outlook.com
                    </li>
                    <li>
                      <strong>Freelance: </strong>Available
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                "Hi, My name is Yafei, I'm a highly motivated and dedicated web
                developer with a passion for creating innovative and
                user-friendly web applications. Experienced in the MERN stack,
                specializing in building interactive and intuitive solutions
                that seamlessly integrate frontend and backend technologies.
                Committed to delivering high-quality code, implementing best
                practices, and continuously improving skills to stay ahead in
                the ever-evolving field of web development."
              </p>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
      </section>
      {/* ------------------ Skills ------------------ */}

      <section id="skills" className="skills">
        <div
          className="container"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1200"
          data-aos-once="true"
        >
          <div className="section-title">
            <h2>Skills</h2>
            <p>
              I specialize in full-stack web development, working with a range
              of technologies including HTML, CSS, JavaScript, React, Node.js,
              MongoDB, etc. My goal is to craft beautiful, functional, and
              user-friendly websites that leave a lasting impact.
            </p>
          </div>

          <div className="row skills-content">
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">
                  HTML <i className="val">100%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  CSS <i className="val">90%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  JavaScript <i className="val">80%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">
                  MERN <i className="val">80%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  SQL <i className="val">90%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <Waypoint onEnter={() => setProcess()}>
                <div className="progress">
                  <span className="skill">
                    AMS <i className="val">70%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </Waypoint>
            </div>
          </div>
        </div>
      </section>
      <br></br>
      <br></br>

      {/* ------------------ Facts ------------------ */}
      <section id="facts" className="facts">
        <div
          className="container"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1200"
          data-aos-once="true"
        >
          <div className="section-title">
            <h2>Facts</h2>
            <p>
              After finishing my web bootcamp at Columbia University, I've had
              the privilege of working on a variety of exciting projects. From
              collaborating with startups to build their online presence from
              scratch to contributing to large-scale web applications, I've
              enjoyed every challenge that has come my way.
            </p>
          </div>
          <Waypoint onEnter={() => new PureCounter()}>
            <div className="row counters">
              <div className="col-4 text-center">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="205"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>Clients</p>
              </div>
              <div className="col-4 text-center">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="36"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>Projects</p>
              </div>

              <div className="col-4 text-center">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="1500"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>Hours Of Coding</p>
              </div>
            </div>
          </Waypoint>
        </div>
      </section>
    </>
  );
}
