import React, { Fragment } from "react";
import styled from "styled-components";
import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";

const tabs = [
  {
    id: 1,
    name: "Delivery",
    link: "",
    active_img:
      "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
    inactive_img:
      "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
  },
  {
    id: 2,
    name: "Dining Out",
    link: "/dining_out",
    active_img:
      "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
    inactive_img:
      "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
  },
  {
    id: 3,
    name: "Nightlife",
    link: "/night_life",
    active_img:
      "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
    inactive_img:
      "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
  },
];

const Navigation = () => {
  const [isActive, setIsActive] = useState("Delivery");
  return (
    <Fragment>
      <Container>
        <NavContainer>
          {tabs.map((tab) => {
            return (
              <NavLink
                key={tab.id}
                to={`${tab.link}`}
                onClick={() => setIsActive(tab.name)}
                style={{
                  borderBottom: tab.name === isActive && "2.5px solid tomato",
                }}
              >
                <img
                  src={
                    tab.name === isActive ? tab.active_img : tab.inactive_img
                  }
                  alt={tab.name}
                />
                <p
                  style={{
                    color: tab.name === isActive ? "tomato" : "gray",
                  }}
                >
                  {tab.name}
                </p>
              </NavLink>
            );
          })}
        </NavContainer>
      </Container>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

const Container = styled.div`
  width: 100%;
  margin-top: 30px;
  border-bottom: 1px solid #ccc;
`;
const NavContainer = styled.a`
  width: 80%;
  height: 100px;
  margin: auto;
  display: flex;
  align-items: flex-end;
  a {
    display: flex;
    height: 80px;
    align-items: center;
    margin-right: 30px;
    padding-bottom: 10px;
    color: gray;
    img {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 7px;
      border-radius: 40px;
    }
    p {
      margin: 0 7px;
    }
  }
`;
const Category = styled.div``;
