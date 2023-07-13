import React, { useState } from "react";
import Project from "../Project";

export default function Portfolio() {
  const [projects] = useState([
    {
      name: "project-1",
      description: "MERN Stack",
      link: "https://github.com",
      repo: "https://github.com",
    },
    {
      name: "project-2",
      description: "MERN Stack",
      link: "https://github.com",
      repo: "https://github.com",
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project project={project} key={"project" + idx} />
        ))}
      </div>
    </div>
  );
}
