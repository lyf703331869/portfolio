import React from "react";
import resume from "../../assets/resume/YafeiLiu's Resume.pdf";

export default function Resume() {
  return (
    <section id="resume" class="resume">
      <div
        class="container"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1200"
        data-aos-once="true"
      >
        <div class="section-title">
          <h2>Resume</h2>
        </div>

        <div className="download">
          <a href={resume} download={"Yafei Liu's Resume"} target="_blank">
            <button className="btn btn-primary">Download</button>
          </a>
        </div>

        <div class="row">
          <div class="col-lg-6">
            <h3 class="resume-title">Summary</h3>
            <div class="resume-item pb-0">
              <h4>Yafei Liu</h4>
              <p>
                <em>
                  Results-oriented and creative Web Developer with a track
                  record of 2+ years in designing and building user-centric
                  websites and web applications. Proficient in front-end and
                  back-end technologies, I thrive on transforming ideas into
                  polished and functional digital experiences, meeting deadlines
                  with precision and excellence.
                </em>
              </p>
              <p>
                <ul>
                  <li>New York, NY</li>
                  <li>+1 (929) 204-6236</li>
                  <li>yafeiliunyc@outlook.com</li>
                </ul>
              </p>
            </div>

            <h3 class="resume-title">Education</h3>
            <div class="resume-item">
              <h4>Full Stack Web Development Certificate</h4>
              <h5>2022 - 2022</h5>
              <p>
                <em>Columbia Engineering Boot Camps, New York, NY</em>
              </p>
              <p>
                I completed an intensive Full Stack Web Development Bootcamp at
                Columbia University, where I gained hands-on experience in
                cutting-edge technologies, honed my skills in frontend and
                backend development, and collaborated on diverse projects,
                equipping me to thrive in the dynamic world of web development.
              </p>
            </div>
            <div class="resume-item">
              <h4>Master of Business Administration</h4>
              <h5>2013 - 2015</h5>
              <p>
                <em>New York Institute of Technology, New York, NY</em>
              </p>
              <p>
                I pursued my Master's degree in Business Administration (MBA) at
                NYIT, a transformative journey that provided me with a
                comprehensive understanding of business strategies, leadership
                principles, and a global perspective, empowering me to excel in
                the dynamic landscape of modern business.
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <h3 class="resume-title">Project Experience</h3>
            <div class="resume-item">
              <h4>Kindler</h4>
              <h5>2022</h5>
              <p>
                <em>New York, NY</em>
              </p>
              <p>
                <ul>
                  <li>
                    Created and launched a groundbreaking web application that
                    transformed developer-recruiter matching, resulting in a 40%
                    increase in successful placements
                  </li>
                  <li>
                    Implemented an intuitive interface for recruiters to view
                    prospective developers and their skills/projects, resulting
                    in a 60% boost in user engagement
                  </li>
                  <li>
                    Designed and executed a scalable architecture, combining
                    MongoDB, Express, React, and NodeJS, achieving a 75%
                    improvement in system responsiveness
                  </li>
                  <li>
                    Integrated secure authentication and authorization features
                    into the application, prioritizing privacy and
                    confidentiality for users
                  </li>
                </ul>
              </p>
            </div>
            <div class="resume-item">
              <h4>Folio Fund</h4>
              <h5>2022</h5>
              <p>
                <em>New York, NY</em>
              </p>
              <p>
                <ul>
                  <li>
                    Developed a web application aimed at streamlining portfolio
                    management for users, showcasing innovation and efficiency,
                    leading to favorable outcomes
                  </li>
                  <li>
                    Utilized RESTful APIs to fetch real-time financial data,
                    presenting intricate portfolio statistics that contributed
                    to a 25% improvement in informed decision-making
                  </li>
                  <li>
                    Collaborated with a diverse team to craft an engaging user
                    interface, leading to a 40% rise in user engagement
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
