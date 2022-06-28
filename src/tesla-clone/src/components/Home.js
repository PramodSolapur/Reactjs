import React from "react";
import Section from "./Section";
import styled from "styled-components";
import { teslaData } from "../mockData";

const Home = () => {
  return (
    <Container>
      {/* <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="modelY.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-X.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        backgroundImg="SolarPanels-D.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Solar for New Roofs"
        description="Solar roof Costs Less Than a New Roof Plus Solar Panels"
        backgroundImg="Design-D.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftBtnText="Shop Now"
      /> */}

      {teslaData &&
        teslaData.map((data) => {
          const {
            title,
            description,
            backgroundImg,
            leftBtnText,
            rightBtnText,
          } = data;
          return (
            <Section
              title={title}
              description={description}
              backgroundImg={backgroundImg}
              leftBtnText={leftBtnText}
              rightBtnText={rightBtnText}
            />
          );
        })}
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory; // full page scroll property
  overflow-y: scroll;
`;
