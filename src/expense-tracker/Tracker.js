import React from "react";
import { useState } from "react";
import styled from "styled-components";

const Tracker = () => {
  const [text, setText] = useState("");
  const [balance] = useState(100000);
  const [amount, setAmount] = useState(0);
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [historyList, setHistoryList] = useState([]);
  const handleTransaction = () => {
    if (!text || !amount) {
      return;
    } else {
      const item = { id: Date.now(), name: text, amount: Number(amount) };
      setHistoryList([...historyList, item]);
      if (Number(amount) > 0) {
        setIncome((prevIncome) => prevIncome + Number(amount));
      } else {
        setExpense((prevExpense) => prevExpense + Number(amount));
      }
      setText("");
      setAmount(0);
    }
  };
  return (
    <Container>
      <h1>Expense Tracker</h1>
      <Balance>
        <p>Your Balance</p>
        <h2>${balance + expense + income}</h2>
      </Balance>
      <DisplayContainer>
        <Expense>
          <h4>Expense</h4>
          <h5 style={{ color: "red" }}>${(expense * -1).toFixed(2)}</h5>
        </Expense>
        <Income>
          <h4>Income</h4>
          <h5 style={{ color: "green" }}>${income.toFixed(2)}</h5>
        </Income>
      </DisplayContainer>
      <History>
        <h5>History</h5>
        {historyList.map((item) => (
          <HistoryList
            key={item.id}
            style={{
              borderRight: `4px solid ${item.amount > 0 ? "green" : "red"}`,
            }}
          >
            <p>{item.name}</p>
            <p>{item.amount}</p>
          </HistoryList>
        ))}
      </History>
      <Transaction>
        <h5>Add new Transaction</h5>
        <TextField>
          <h5>Text</h5>
          <input
            type="text"
            placeholder="Enter Text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </TextField>
        <AmountField>
          <h5>Amount</h5>
          <h5>(negative-expense, positive-income)</h5>
          <input
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <Button onClick={handleTransaction}>Add Transaction</Button>
        </AmountField>
      </Transaction>
    </Container>
  );
};

export default Tracker;

const Container = styled.div`
  width: 50%;
  margin: auto;
  margin-top: 40px;
  h1 {
    text-align: center;
  }
`;

const Balance = styled.div`
  margin: 20px 0px;
  p {
    text-transform: uppercase;
    font-size: 15px;
    font-weight: bold;
  }
`;

const DisplayContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  h4 {
    font-size: 18px;
  }
  h5 {
    font-size: 15px;
  }
`;

const Expense = styled.div`
  display:flex:
  flex:0.5;
  flex-direction:column:
  justify-content:center;
  align-items:center;
  padding: 10px 50px;

`;
const Income = styled(Expense)``;

const History = styled.div`
  margin: 20px 0px;
  h5 {
    font-size: 16px;
    padding-bottom: 5px;
    border-bottom: 1px solid #ccc;
  }
`;

const HistoryList = styled.div`
  display: flex;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 10px;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
  text-transform: capitalize;
  p {
    font-size: 16px;
  }
`;

const Transaction = styled.div`
  h5 {
    font-size: 16px;
    padding-bottom: 5px;
    border-bottom: 1px solid #ccc;
  }
  input {
    width: 100%;
    padding: 5px;
    outline: none;
  }
`;
const TextField = styled.div`
  h5 {
    border: none;
  }
  input {
  }
`;
const AmountField = styled(TextField)``;
const Button = styled.button`
  width: 100%;
  outline: none;
  border: 1px solid #ccc;
  background: #9d4af0;
  color: #fff;
  border-radius: 3px;
  font-size: 15px;
  padding: 8px 0px;
`;
