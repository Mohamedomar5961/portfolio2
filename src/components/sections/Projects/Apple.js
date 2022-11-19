import React from "react";

const apple = () => {
  return (
    <div className="apple">
      <div className="img"></div>
      <div className="desc">
        <p>This website was made to look like the Apple website.</p>
        <div className="skill-btns">
          <div className="skillsUsed">
            <div className="html">HTML</div>
            <div className="sass">SASS</div>
          </div>
          <div className="a-tags">
            <a
              className="github"
              href="https://github.com/Mohamedomar5961/apple-clone"
              target={"_blank"}
            >
              GitHub
            </a>
            <a
              className="website"
              href="https://appleclone-by-mohamedomar.netlify.app/"
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

export default apple;
