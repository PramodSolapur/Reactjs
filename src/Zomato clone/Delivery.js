import React, { Fragment } from "react";
import styled from "styled-components";
import { NavLink, Outlet } from "react-router-dom";

const Delivery = () => {
  return (
    <Fragment>
      <Container>
        <h3>Inspiration for your first order</h3>
        <CategoryContainer className="displayStyles">
          <NavLink to="/" className="displayStyles">
            <img
              src="https://b.zmtcdn.com/data/dish_images/da37534e55d5f1450ea9771c0627a8d81641644205.png"
              alt="Home Style"
            />
            <p>Home Style</p>
          </NavLink>
          <NavLink to="biryani" className="displayStyles">
            <img
              src="https://b.zmtcdn.com/data/o2_assets/301b0637eb84c86fdb4482740b35dc351632716576.png"
              alt="Biryani"
            />
            <p>Biryani</p>
          </NavLink>
        </CategoryContainer>
      </Container>
      <Outlet />
    </Fragment>
  );
};

export default Delivery;

const Container = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 20px;
  background-color: rgb(248, 248, 248);
  height: 200px;
  h3 {
    text-align: center;
    margin-bottom: 30px;
  }
`;

const CategoryContainer = styled.div`
  a {
    flex-direction: column;
    height: 100px;
    p {
      color: #111;
      letter-spacing: 1.8px;
    }
    img {
      height: 100%;
      border-radius: 50px;
      margin: 0px 30px;
    }
  }
`;
