import React from "react";

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
                    Developed an innovative web application revolutionizing
                    developer-recruiter matching, streamlining the process
                  </li>
                  <li>
                    Implemented an intuitive and easy-to-navigate interface for
                    recruiters to view prospective developers and their
                    skills/projects
                  </li>
                  <li>
                    Leveraged MongoDB, Express.js, React.js, and Node.js to
                    create a scalable solution with optimal performance and
                    seamless integration
                  </li>
                  <li>
                    Integrated advanced secure authentication and authorization
                    features into the application, prioritizing privacy and
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
                    management for users, showcasing innovation and efficiency
                  </li>
                  <li>
                    Utilized RESTful APIs to fetch real-time financial data and
                    present comprehensive portfolio statistics in a
                    user-friendly manner
                  </li>
                  <li>
                    Collaborated with team members to design a visually
                    captivating and harmonious user interface, ensuring an
                    engaging user experience
                  </li>
                  <li>
                    Garnered commendable user feedback, highlighting the
                    application's notable efficiency, intuitive features, and
                    user-friendly nature
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
