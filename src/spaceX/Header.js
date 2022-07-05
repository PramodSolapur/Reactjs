import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import styled from "styled-components";
import { links } from "./data";

const Header = ({ handleClick }) => {
  return (
    <Container>
      <ImgContainer>
        <img
          src="https://cdn.shopify.com/s/files/1/2208/5191/files/spacex_256x256_12bbc387-85af-405d-84f2-c2486b580166_1600x.png?v=1624553276"
          alt="SpaceX Logo"
        />
      </ImgContainer>
      <NavContainer>
        {links.map(({ id, link }) => (
          <a href="#" key={id}>
            {link}
          </a>
        ))}
      </NavContainer>
      <LeftContainer>
        <a href="#">SHOP</a>
        <a href="#" onClick={handleClick}>
          <GiHamburgerMenu />
        </a>
      </LeftContainer>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 60px;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  z-index: 20;
  a {
    font-size: 14px;
    letter-spacing: 1px;
    color: white;
  }
`;
const ImgContainer = styled.div`
  width: 17%;

  margin-left: 40px;
  img {
    width: 100%;
  }
`;
const NavContainer = styled.div`
  flex: 1;
  margin-left: 40px;
`;
const LeftContainer = styled.div`
  margin-right: 30px;
`;
