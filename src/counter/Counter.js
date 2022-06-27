import React, { useState } from "react";
import styled from "styled-components";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);
  const handleIncrement = () => {
    // setCount(count + 1);  // It doesn't remembers the previous count
    setCount((prevCount) => prevCount + 1); // prevCount remembers the previous count;
  };

  const handleDecrement = () => {
    // setCount(count - 1);
    setCount((prevCount) => prevCount - 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  const handleAmount = () => {
    setCount((prevCount) => prevCount + Number(amount));
    setAmount(0);
  };
  return (
    // Container is a styled-component so we are passing props to it.
    <Container count={count}>
      <h1>{count}</h1>
      <BtnContainer>
        <Button onClick={handleDecrement}>-</Button>
        <Button onClick={handleReset}>reset</Button>
        <Button onClick={handleIncrement}>+</Button>
      </BtnContainer>
      <InputConatiner>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        {/* Whenever you use input field, value attribute should be provided */}
        <Button onClick={handleAmount}>add value</Button>
      </InputConatiner>
    </Container>
  );
};

export default Counter;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 70px;
    color: ${(props) =>
      props.count === 0 ? "black" : props.count > 0 ? "green" : "red"};
  }
  // props are coming from Container component
`;

const BtnContainer = styled.div``;
const InputConatiner = styled.div``;

const Button = styled.button`
  padding: 10px 20px;
  margin: 20px;
`;
