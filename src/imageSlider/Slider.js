import React from "react";
import { useState } from "react";
import styled from "styled-components";

const SliderEx = () => {
  const initialValues = ["MongoDB", "ExpressJS", "ReactJS", "NodeJS"];
  const [index, setIndex] = useState(0);
  const [value] = useState(initialValues);

  const checkIndex = (index) => {
    if (index === value.length) {
      return 0;
    }
    if (index < 0) {
      return value.length - 1;
    }
    return index;
  };
  const handleNext = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };
  const handlePrev = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };
  return (
    <Container>
      <BtnContainer>
        <Button onClick={handlePrev}>&lt;</Button>
        <Slider>{value[index]}</Slider>
        <Button onClick={handleNext}>&gt;</Button>
      </BtnContainer>
    </Container>
  );
};

export default SliderEx;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BtnContainer = styled.div`
  width: 500px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  aling-items: center;
  background: white;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;
const Slider = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  letter-spacing: 2px;
`;
const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 15px;
  cursor: pointer;
`;
