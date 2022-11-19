import React from "react";
import Resume from "../extra/Resume.pdf";

const Footer = () => {
  return (
    <div className="footer">
      <a href={Resume} className="downloadBtn" target={"_blank"}>
        Download Resume
      </a>
    </div>
  );
};

export default Footer;
