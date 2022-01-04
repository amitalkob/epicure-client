import React from "react";
import { useMediaQuery } from "react-responsive";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import Menu from "../Menu/Menu";
import { useState } from "react";

const Header = () => {
  const isDesktopScreen = useMediaQuery({ query: "(min-width: 600px)" });
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  const openMobileHeader = (
    <div className="header-buttons">
      <button className="menu-button" onClick={openMenu} />
      {isOpen && <Menu />}
      <NavLink to="/" className="app-button" />
      <button className="search-button" />
      <NavLink
        to={localStorage.Token ? "/user" : "/login"}
        className="user-button"
      />
      <button className="bag-button" />
    </div>
  );

  const openDesktopHeader = (
    <div className="header-buttons">
      <div className="left-side">
        <NavLink to="/">
          <button className="app-button" />
        </NavLink>
        <NavLink to="/" className="epicure">
          EPICURE
        </NavLink>
        <NavLink
          to="/restaurants"
          className={(navData) =>
            navData.isActive ? "restaurants-active" : "restaurants"
          }
        >
          Restaurants
        </NavLink>
        <NavLink
          to="/chefs"
          className={(navData) => (navData.isActive ? "chefs-active" : "chefs")}
        >
          Chefs
        </NavLink>
      </div>
      <div className="right-side">
        <div className="header-search-field">
          <input
            className="header-search-text"
            placeholder=" Search for restaurant cuisine, chef"
            type="text"
          ></input>
          <button className="search-button" />
        </div>
        <NavLink
          to={localStorage.Token ? "/user" : "/login"}
          className="user-button"
        />
        <button className="bag-button" />
      </div>
    </div>
  );

  return (
    <header className="header">
      {!isDesktopScreen ? openMobileHeader : openDesktopHeader}
      <div className="header-line" />
    </header>
  );
};

export default Header;
