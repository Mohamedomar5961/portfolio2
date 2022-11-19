import React from "react";
import Footer from "./Footer";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

const Home = () => {
  return (
    <div className="homeBody">
      <div className="sections first">
        <div className="content">
          <h2>Mohamed Omar's Portfolio</h2>
          <p>Aspiring front-end developer</p>
        </div>
      </div>
      <div className="sections second">
        <Projects />
      </div>
      <div className="sections third">
        <Skills />
      </div>
      <div className="sections footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
