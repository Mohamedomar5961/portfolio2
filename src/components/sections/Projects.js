import React from "react";
import Apple from "./Projects/Apple";
import Ecommerce from "./Projects/Ecommerce";
import Nikes from "./Projects/Nikes";

const Projects = () => {
  return (
    <div className="projects-content">
      <h3>Projects</h3>
      <div className="container">
        <Nikes />
        <Ecommerce />
        <Apple />
      </div>
      <a
        href="https://github.com/Mohamedomar5961?tab=repositories"
        className="repository-Btn"
        target="_blank"
      >
        Browse all Projects
      </a>
    </div>
  );
};

export default Projects;
