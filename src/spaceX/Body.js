import React, { Fragment } from "react";
import styled from "styled-components";
import { data } from "./data";

const Body = ({ isSidebarOpen }) => {
  return (
    <Fragment>
      {isSidebarOpen && <div className="overlay" />}

      {data.map((item) => {
        return (
          <Container key={item.id} imgUrl={item.imageUrl}>
            <Content>
              {item.title && <h3>{item.title}</h3>}
              <h1>{item.mission}</h1>
              <button>{item.btnTitle}</button>
            </Content>
          </Container>
        );
      })}
    </Fragment>
  );
};

export default Body;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: ${(props) => `url('${props.imgUrl}')`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: contain;
  position: relative;
  color: white;
  letter-spacing: 2px;
`;

const Content = styled.div`
  position: absolute;
  top: 60%;
  left: 7%;
  width: 30%;
  h1 {
    font-weight: bold;
  }
  button {
    padding: 12px 35px;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1.5px;
    background-color: transparent;
    border: 1px solid #fff;
    color: white;
    position: relative;
    transition: all 0.3s linear;
    z-index: 1;
    overflow: hidden;
  }

  button:hover {
    color: #111;
  }

  button::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    transform: translateX(-100%);
    transition: all 0.3s linear;
  }

  button:hover:after {
    z-index: -1;
    transform: translateX(0);
  }
`;
