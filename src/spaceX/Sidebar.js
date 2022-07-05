import React, { Fragment } from "react";
import { useState } from "react";
import styled from "styled-components";

const Sidebar = ({ isSidebarOpen, handleClick }) => {
  return (
    <Fragment>
      {isSidebarOpen && (
        <Container isSidebarOpen={true}>
          <CancelContainer onClick={handleClick}>&#x2715;</CancelContainer>
          <a href="">MISSION</a>
          <a href="">LAUNCHES</a>
          <a href="">CAREERS</a>
          <a href="">UPDATES</a>
          <a href="">SHOP</a>
        </Container>
      )}
    </Fragment>
  );
};

export default Sidebar;

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  background-color: #fff;
  z-index: 100;
  width: 20%;
  background-color: #111;
  flex: 1;
  transition: transform 0.3s linear;
  transform: ${(props) =>
    props.isSidebarOpen ? "translateX(0%)" : "translateX(100%)"};
  a {
    font-size: 16px;
    border-bottom: 1px solid #ccc;
    color: white;
    padding: 10px 0px;
    margin: 0px 30px;
    width: 80%;
    text-align: right;
  }
`;

const CancelContainer = styled.div`
  margin-right: 30px;
  height: 60px;
  display: flex;
  align-items: center;
  color: white;
  cursor: pointer;
`;
