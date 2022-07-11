import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <NavBar>
      <h4>TheCocktailDB</h4>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </NavBar>
  );
};

export default Header;

const NavBar = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  h4 {
    letter-spacing: 2px;
    color: #457b9d;
  }
  a {
    color: gray;
    margin-left: 20px;
    letter-spacing: 1.5px;
    &.active {
      color: black;
    }
  }
`;
