import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./NavbarStyles.css";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [color, setColor] = useState(false);
  const handleActive = () => {
    setIsActive(!isActive);
  };
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>GLX TRVL</h1>
      </Link>
      <ul className={isActive ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/training">Training</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div
        className="hamburger"
        onClick={handleActive}
        style={{ color: "#fff", cursor: "pointer" }}
      >
        {isActive ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>
    </div>
  );
};

export default Navbar;
