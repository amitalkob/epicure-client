import React from "react";
import { NavLink } from "react-router-dom";

import "./PageButtons.scss";

const PageButtons = () => {
  return (
    <div className="buttons-container">
      <button className="page-button">CHEFS</button>
      <NavLink to="/restaurants" className="page-button">
        RESTAURANTS
      </NavLink>
    </div>
  );
};

export default PageButtons;
