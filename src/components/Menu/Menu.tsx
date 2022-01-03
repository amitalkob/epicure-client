import "./Menu.scss";
import Modal from "react-modal";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Modal
      isOpen={isOpen}
      className={"menu-modal"}
      ariaHideApp={false}
      onRequestClose={closeMenu}
      closeTimeoutMS={1000}
    >
      <div className="menu-close-container">
        <button className="close-button" onClick={closeMenu} />
      </div>
      <div className="menu">
        <div className="menu-close-line" />
        <NavLink to="/chefs" className="menu-link" onClick={closeMenu}>
          Chefs
        </NavLink>
        <NavLink to="/restaurants" className="menu-link" onClick={closeMenu}>
          All Restaurants
        </NavLink>
        <div className="menu-line" />
        <div className="menu-button">Sign in</div>
        <div className="menu-button">Contact us</div>
        <div className="menu-button">Terms of Use</div>
      </div>
    </Modal>
  );
};

export default Menu;
