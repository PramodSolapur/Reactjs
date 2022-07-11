import React, { Fragment, useContext, useState } from "react";
import styled from "styled-components";
import { GrFormAdd } from "react-icons/gr";
import { HiMinusSm } from "react-icons/hi";
import { ShoppingContext } from "./context";

const CartList = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(ShoppingContext);
  const itemPrice = cartItems.reduce(
    (acc, curr) => curr.price * curr.quantity,
    0
  );
  const taxPrice = itemPrice * 0.14;
  const shippingPrice = itemPrice > 20000 ? 0 : 1000;
  const totalPrice = itemPrice + taxPrice + shippingPrice;
  const data = useContext(ShoppingContext);
  console.log(data);
  return (
    <Fragment>
      {cartItems.length > 0 && (
        <CartCon>
          <CartItem>
            {cartItems.map((item) => {
              const { quantity, id, price, title } = item;
              return (
                <EachItem key={id}>
                  <h5>{title}</h5>
                  <Buttons>
                    <HiMinusSm
                      className="icon"
                      onClick={() => removeFromCart(item)}
                    />
                    <GrFormAdd
                      className="icon"
                      onClick={() => addToCart(item)}
                    />
                  </Buttons>
                  <QntPrice>
                    <p>
                      {quantity} x {price}
                    </p>
                  </QntPrice>
                </EachItem>
              );
            })}
          </CartItem>
          <TotalAmount>
            <div className="price">
              <p>Items Price</p>
              <p>{itemPrice.toFixed(2)}</p>
            </div>
            <div className="price">
              <p>Tax Price</p>
              <p>{taxPrice.toFixed(2)}</p>
            </div>
            <div className="price">
              <p>Shipping Price</p>
              <p>{shippingPrice}</p>
            </div>
            <div className="price total">
              <p>Total Price</p>
              <p>{totalPrice.toFixed(2)}</p>
            </div>
          </TotalAmount>
        </CartCon>
      )}
    </Fragment>
  );
};

export default CartList;

const CartCon = styled.div`
  width: 30%;
  height: 400px;
  border: 1px solid #f2f2f2;
  /* background-color: #e1e1e1; */
  margin: 0px 20px;
`;

const CartItem = styled.div`
  width: 90%;
  margin: auto;
  height: 58%;
  overflow-y: scroll;
`;

const EachItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  h5 {
    font-size: 16px;
  }
`;
const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .icon {
    margin-left: 7px;
    border: 1px solid black;
    cursor: pointer;
  }
`;
const QntPrice = styled.div`
  padding-right: 10px;
`;

const TotalAmount = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 10px;
  .price {
    display: flex;
    justify-content: space-between;
  }
  .total {
    color: red;
  }
`;
