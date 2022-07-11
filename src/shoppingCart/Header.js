import React, { useContext } from "react";
import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import { ShoppingContext } from "./context";

const Header = () => {
  const { cartItems } = useContext(ShoppingContext);
  return (
    <Container>
      <h3>Shopping Cart</h3>
      <div>
        <FaShoppingCart className="icon" />
        <span>{cartItems.length}</span>
      </div>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #ececec;
  div {
    display: flex;
    align-items: center;
    .icon {
      font-size: 25px;
      margin-right: 10px;
    }
    span {
      font-size: 20px;
    }
  }
`;
