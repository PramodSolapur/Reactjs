import React, { useState } from "react";
import { useReducer } from "react";
import styled from "styled-components";

const initialState = 0;

const counterReducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  }
  if (action.type === "DECREMENT") {
    return state - 1;
  }
  if (action.type === "RESET") {
    return 0;
  }
  if (action.type === "AMOUNT") {
    return state + action.payload;
  }
  return state;
};

const CounterReducer = () => {
  const [state, disptach] = useReducer(counterReducer, initialState);
  const [amount, setAmount] = useState(0);
  const handleIncrement = () => {
    disptach({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    disptach({ type: "DECREMENT" });
  };

  const handleAmount = () => {
    disptach({ type: "AMOUNT", payload: Number(amount) });
    setAmount(0);
  };
  return (
    <Container count={state}>
      <h1>{state}</h1>
      <BtnContainer>
        <Button onClick={handleDecrement}>-</Button>
        <Button onClick={() => disptach({ type: "RESET" })}>reset</Button>
        <Button onClick={handleIncrement}>+</Button>
      </BtnContainer>
      <InputConatiner>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Button onClick={handleAmount}>add value</Button>
      </InputConatiner>
    </Container>
  );
};

export default CounterReducer;

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
`;

const BtnContainer = styled.div``;
const InputConatiner = styled.div``;

const Button = styled.button`
  padding: 10px 20px;
  margin: 20px;
`;
