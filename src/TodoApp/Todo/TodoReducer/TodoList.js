import React, { useState, useReducer } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { todoReducer, initialValues } from "./todoReducer";
import { useEffect } from "react";

const TodoList = () => {
  const [state, dispatch] = useReducer(todoReducer, initialValues);
  const [name, setName] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  useEffect(() => {
    const timid = setTimeout(() => {
      closeModal();
    }, 2000);
    return () => clearTimeout(timid);
  }, [state.people]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing && name) {
      dispatch({ type: "EDIT_PERSON", payload: { editId, name } });
      setIsEditing(false);
      setEditId(null);
    } else if (name) {
      const item = { id: Date.now(), name };
      dispatch({ type: "ADD_PEOPLE", payload: item });
    }
    setName("");
  };

  const handleEdit = (pid) => {
    const { id, name } = state.people.find((person) => person.id === pid);
    setIsEditing(true);
    setName(name);
    setEditId(id);
  };

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_PERSON", payload: id });
  };

  const handleClear = () => {
    dispatch({ type: "CLEAR_ITEMS" });
  };

  return (
    <Container>
      {state.show && (
        <p
          style={{
            color: `${state.color}`,
            textAlign: "center",
            fontSize: "15px",
            letterSpacing: "1.5px",
            textTransform: "capitalize",
          }}
        >
          {state.msg}
        </p>
      )}
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button type="submit" disabled={!name}>
          {isEditing ? "Edit" : "Add"}
        </Button>
      </Form>
      <Todo>
        {state.people.map((person) => {
          return (
            <TodoItem key={person.id}>
              <h5>{person.name}</h5>
              <ButtonContainer>
                <button onClick={() => handleEdit(person.id)}>edit</button>
                <button onClick={() => handleRemove(person.id)}>remove</button>
              </ButtonContainer>
            </TodoItem>
          );
        })}
        {state.people.length > 1 && (
          <ClearBtn onClick={handleClear}>Clear All</ClearBtn>
        )}
        {state.isModalOpen && (
          <Fade top>
            <Modal>
              <p>Do you want to clear all items?</p>
              <div>
                <button
                  className="btn btn-danger mx-4"
                  onClick={() => dispatch({ type: "Close_Modal" })}
                >
                  No
                </button>
                <button
                  className="btn btn-warning mx-4"
                  onClick={() =>
                    dispatch({ type: "Close_Modal", payload: true })
                  }
                >
                  Yes
                </button>
              </div>
            </Modal>
          </Fade>
        )}
      </Todo>
    </Container>
  );
};

export default TodoList;

const Container = styled.div`
  width: 30%;
  margin: auto;
  margin-top: 40px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  border: 1px solid #ccc;
`;

const Input = styled.input`
  flex: 1;
  height: 30px;
  padding: 10px;
  font-size: 16px;
  border: none;
  outline: none;
`;
const Button = styled.button`
  padding: 6px 12px;
  margin: 0;
  line-height: 0;
  border: none;
  outline: none;
  font-size: 14px;
  background: #ffa500db;
`;

const Todo = styled.div`
  margin-top: 20px;
  border-radius: 3px;
`;
const TodoItem = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  background: #fff;
  padding: 0 8px;
  h5 {
    font-size: 16px;
  }
  button {
    margin: 0;
    line-height: 0;
    border: none;
    outline: none;
    font-size: 14px;
    background: #fff;
  }
`;

const ButtonContainer = styled.div``;

const ClearBtn = styled.button`
  border: none;
  outline: none;
  font-size: 14px;
  width: 100%;
  border: 1px solid #ccc;
  padding: 8px;
`;

const Modal = styled.div`
  width: 400px;
  position: fixed;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 30px;
  color: #fff;
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 8px;
`;
