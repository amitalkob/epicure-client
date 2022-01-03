import React from "react";

import "./About.scss";
import aboutImg from "../../assets/home/about-logo.png";
import appleIcon from "../../assets/home/apple-icon.png";
import googleIcon from "../../assets/home/google-icon.png";

const About = () => {
  const title = (
    <span className="about-title">
      ABOUT US :
      <br />
    </span>
  );

  const text = (
    <div className="about-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel
      justo fermentum bibendum non eu ipsum. Cras porta malesuada eros,
      egetblandit turpis suscipit at. Vestibulum sed massa in magna sodales
      porta. Vivamus elit urna, dignissim a vestibulum.
      <br />
      <br />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel
      justo fermentum bibendum non eu ipsum. Cras porta malesuada eros, eget
      blandit turpis suscipit at. Vestibulum sed massa in magna sodales porta.
      Vivamus elit urna, dignissim a vestibulum. <br />
    </div>
  );

  const downloadButtons = (
    <div className="download">
      <div className="download-container">
        <img src={appleIcon} alt="apple" className="apple-icon" />
        <div className="download-text">
          <div>Download on the</div>
          <div className="store-type">App Store</div>
        </div>
      </div>
      <div className="download-container">
        <img src={googleIcon} alt="google" className="google-icon" />
        <div className="download-text">
          <div>Get it on</div>
          <div className="store-type">Google Play</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="about-container">
      {title}
      <div className="about-text-and-logo">
        {text}
        <img src={aboutImg} alt="about" className="about-logo" />
      </div>
      {downloadButtons}
    </div>
  );
};

export default About;
