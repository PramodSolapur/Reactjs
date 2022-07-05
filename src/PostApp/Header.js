import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { PostContext } from "./context";

const Header = () => {
  const { text, setText } = useContext(PostContext);

  return (
    <Container>
      <SearchBox>
        <input
          type="text"
          placeholder="search post by title"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </SearchBox>
      <NavBar>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/post">Post</NavLink>
        <NavLink to="/about">About</NavLink>
      </NavBar>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: fixed;
  width: 80%;
  top: 0;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #61dbfb;
`;
const SearchBox = styled.div`
  display: flex;
  flex: 0.7;
  input {
    width: 100%;
    padding: 5px;
    border: 1px solid #ccc;
    outline: none;
    border-radius: 3px;
  }
`;
const NavBar = styled.div`
  a {
    font-size: 18px;
    color: gray;
    &.active {
      color: black;
    }
  }
`;
