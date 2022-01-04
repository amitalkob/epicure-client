import React from "react";

import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-search-box">
        <div className="hero-text">
          Epicure works with the top <br /> chef restaurants in Tel Aviv
        </div>
        <div className="hero-search-field">
          <button className="hero-search-button" />
          <input
            className="hero-search-text"
            placeholder=" Search for restaurant cuisine, chef"
            type="text"
          ></input>
        </div>
      </div>
    </div>
  );
};
export default Hero;
