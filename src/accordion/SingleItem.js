import React, { useState } from "react";
import styled from "styled-components";

const SingleItem = ({ title, description }) => {
  const [showContent, setShowContent] = useState(false);
  return (
    <Accordion>
      <TititleBtn>
        <h4>{title}</h4>
        <Button onClick={() => setShowContent(!showContent)}>
          {showContent ? "-" : "+"}
        </Button>
      </TititleBtn>
      <p>{showContent && description}</p>
    </Accordion>
  );
};

export default SingleItem;

const Accordion = styled.div`
  width: 100%;
  display: flex;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #fff;
  flex-direction: column;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.25);
  justify-content: space-evenly;
  p {
    padding: 10px;
    font-size: 16px;
    text-align: justify;
  }
`;

const TititleBtn = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-evenly;
  h4 {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0.8;
    letter-spacing: 2px;
    border-right: 0.5px solid #ccc;
  }
`;

const Button = styled.div`
  flex: 0.2;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  cursor: pointer;
`;
