import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

const NavBar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">
        ReactJS
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-item nav-link" to="/about">
            About
          </NavLink>
          <NavLink className="nav-item nav-link" to="/products">
            Products
          </NavLink>
          <NavLink className="nav-item nav-link" to="/users">
            Users
          </NavLink>
          {!user ? (
            <NavLink className="nav-item nav-link" to="/login">
              Login
            </NavLink>
          ) : (
            <button
              className="nav-item nav-link"
              onClick={() => {
                logout();
                navigate("/login");
              }}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
