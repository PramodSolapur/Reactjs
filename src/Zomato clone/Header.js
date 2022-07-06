import React from "react";
import styled from "styled-components";
import { GoLocation } from "react-icons/go";
import { AiFillCaretDown } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = ({ setIsModalOpen, isModalOpen }) => {
  return (
    <HeaderContaier>
      <Zomato>
        <img
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt="Zomato Logo"
        />
      </Zomato>
      <SearchBox>
        <LeftContent>
          <GoLocation />
          <input type="text" placeholder="Bangalore" />
          <AiFillCaretDown />
        </LeftContent>
        <RightContent>
          <FiSearch />
          <input
            type="text"
            placeholder="Search for a restaurant,cuisine or a dish"
          />
        </RightContent>
      </SearchBox>
      <AuthBox>
        {/* <Link to="/login">Log In</Link>  */}
        <Link to="/signup" onClick={() => setIsModalOpen(!isModalOpen)}>
          Sign Up
        </Link>
      </AuthBox>
    </HeaderContaier>
  );
};

export default Header;

const HeaderContaier = styled.div`
  width: 80%;
  height: 60px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Zomato = styled.div`
  width: 140px;
  img {
    width: 100%;
  }
`;
const SearchBox = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  margin: 0 15px;
  background-color: white;
  height: 40px;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;
const LeftContent = styled.div`
  padding: 3px;
  input {
    margin: 2px;
    border: none;
    outline: none;
  }
`;
const RightContent = styled.div`
  display: flex;
  margin-left: 7px;
  align-items: center;
  flex: 1;
  input {
    width: 100%;
    border: none;
    outline: none;
    margin-left: 7px;
  }
`;
const AuthBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 100px;
  a {
    margin: 20px;
    color: gray;
    font-size: 18px;
    cursor: pointer;
  }
`;
