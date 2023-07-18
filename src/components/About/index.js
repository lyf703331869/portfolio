import React from "react";
import avatar from "../../assets/bg/avatar.jpg";
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
            <p>
              Hi, My name is Yafei, I'm a highly motivated and dedicated web
              developer with a passion for creating innovative and user-friendly
              web applications. Experienced in the MERN stack, specializing in
              building interactive and intuitive solutions that seamlessly
              integrate frontend and backend technologies. Committed to
              delivering high-quality code, implementing best practices, and
              continuously improving skills to stay ahead in the ever-evolving
              field of web development.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <img src={avatar} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content">
              <h3>Full stack web developer</h3>
              <p className="fst-italic"></p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <strong>Website:</strong>
                      https://lyf703331869.github.io/portfolio/
                    </li>
                    <li>
                      <strong>Phone:</strong> +1 (929) 204-6236
                    </li>
                    <li>
                      <strong>City:</strong>New York, USA
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <strong>Degree:</strong> Master
                    </li>
                    <li>
                      <strong>PhEmailone:</strong> yafeiliunyc@outlook.com
                    </li>
                    <li>
                      <strong>Freelance:</strong> Available
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                highly motivated and dedicated web developer with a passion for
                creating innovative and user-friendly web applications.
                Experienced in the MERN stack, specializing in building
                interactive and intuitive solutions that seamlessly integrate
                frontend and backend technologies. Committed to delivering
                high-quality improving skills to stay ahead in the ever-evolving
                field of web development.
              </p>
              <p>
                highly motivated and dedicated web developer with a passion for
                creating innovative and user-friendly web applications.
                Experienced in the MERN stack, specializing in building
                interactive and intuitive solutions that seamlessly integrate
                frontend and backend technologies. Committed to delivering
                high-quality improving skills to stay ahead in the ever-evolving
                field of web development.
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
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
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
    </>
  );
}
