import React from "react";

const Skills = () => {
  return (
    <div className="skills-content">
      <h3>Skills</h3>
      <div className="skills-container">
        <div className="pair">
          <div className="left">
            <div className="element">Javascript</div>
            <div className="triangle"></div>
          </div>
          <div className="right">
            <div className="triangle"></div>
            <div className="element">React Js</div>
          </div>
        </div>
        <div className="pair">
          <div className="left">
            <div className="element">Node Js</div>
            <div className="triangle"></div>
          </div>
          <div className="right">
            <div className="triangle"></div>
            <div className="element">Express Js</div>
          </div>
        </div>
        <div className="pair">
          <div className="left">
            <div className="element">TypeScript</div>
            <div className="triangle"></div>
          </div>
          <div className="right">
            <div className="triangle"></div>
            <div className="element">SASS</div>
          </div>
        </div>
        <div className="pair">
          <div className="left">
            <div className="element">Redux</div>
            <div className="triangle"></div>
          </div>
          <div className="right">
            <div className="triangle"></div>
            <div className="element">Git</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
