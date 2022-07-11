import React, { useContext } from "react";
import styled from "styled-components";
import CartList from "./CartList";
import { ShoppingContext } from "./context";
import products from "./shoppingData";

const ProductsList = () => {
  const { addToCart, cartItems, removeFromCart } = useContext(ShoppingContext);
  return (
    <Container>
      <ProductsListCon>
        {products.map((product) => {
          const { id, img, price, title } = product;
          return (
            <ProductCon key={id}>
              <img src={img} alt={title} />
              <Content>
                <h5>{title}</h5>
                <p>${price}</p>
              </Content>
              <Button onClick={() => addToCart(product)}>Add to Cart</Button>
            </ProductCon>
          );
        })}
      </ProductsListCon>
      <CartList />
    </Container>
  );
};

export default ProductsList;

const Container = styled.div`
  width: 100%;
  padding: 30px;
  display: flex;
`;

const ProductsListCon = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const ProductCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  img {
    width: 200px;
    height: 200px;
    object-fit: contain;
    object-position: center;
  }
`;
const Content = styled.div`
  width: 90%;
  height: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;

const Button = styled.div`
  width: 100%;
  border: 1px solid #ccc;
  padding: 7px 0px;
  text-align: center;
  cursor: pointer;
  background-color: #f5f5f5;
  border-radius: 2.5px;
`;
