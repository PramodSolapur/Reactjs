import React from "react";
import SingleItem from "./SingleItem";
import styled from "styled-components";

const menu = [
  {
    id: 1,
    title: "Accordion 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam nisi similique nostrum sapiente sequi neque, est reiciendis quoaliquid velit asperiores consectetur quidem excepturi assumendapariatur tenetur temporibus laudantium inventore. Lorem ipsum dolorsit amet",
  },
  {
    id: 2,
    title: "Accordion 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam nisi similique nostrum sapiente sequi neque, est reiciendis quoaliquid velit asperiores consectetur quidem excepturi assumendapariatur tenetur temporibus laudantium inventore. Lorem ipsum dolorsit amet",
  },
];

const AccordianApp = () => {
  return (
    <Container>
      <AccContainer>
        {menu.map((item) => (
          <SingleItem key={item.id} {...item} />
        ))}
      </AccContainer>
    </Container>
  );
};

export default AccordianApp;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const AccContainer = styled.div`
  width: 50%;
  margin: auto;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
