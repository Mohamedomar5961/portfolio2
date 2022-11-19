import React from "react";

const Nikes = () => {
  return (
    <div className="nikes">
      <div className="img"></div>
      <div className="desc">
        <p>E-commerce website built with React js and Commerce js.</p>
        <div className="skill-btns">
          <div className="skillsUsed">
            <div className="react">React js</div>
            <div className="redux">Redux</div>
            <div className="node">Node</div>
            <div className="express js">Express js</div>
          </div>
          <div className="a-tags">
            <a
              className="github"
              href="https://github.com/Mohamedomar5961/nike-store"
              target={"_blank"}
            >
              GitHub
            </a>
            <a
              className="website"
              href="https://nikestore-268.netlify.app/"
              target={"_blank"}
            >
              Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nikes;
