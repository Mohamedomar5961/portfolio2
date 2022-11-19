import React from "react";

const Ecommerce = () => {
  return (
    <div className="ecommerce">
      <div className="img"></div>
      <div className="desc">
        <p>E-commerce website built with React js and Commerce js.</p>
        <div className="skill-btns">
          <div className="skillsUsed">
            <div className="react">React.js</div>
            <div className="commerce">Commerce.js</div>
            <div className="css">CSS</div>
          </div>
          <div className="a-tags">
            <a
              className="github"
              href="https://github.com/Mohamedomar5961/E-commerce"
              target={"_blank"}
            >
              GitHub
            </a>
            <a
              className="website"
              href="https://mohamed-ecommerce.netlify.app/"
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

export default Ecommerce;
