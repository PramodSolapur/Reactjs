import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import Navigation from "./Navigation";
import { Routes, Route } from "react-router-dom";
import Delivery from "./Delivery";
import DiningOut from "./DiningOut";
import NightLife from "./NightLife";
import HomeStyle from "./HomeStyle";
import Biryani from "./Biryani";
import SignUp from "./SignUp";
import Login from "./Login";

const ZomatoApp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Container>
      <Header isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/" element={<Delivery />}>
            <Route index element={<HomeStyle />} />
            <Route path="biryani" element={<Biryani />} />
          </Route>
          <Route path="dining_out" element={<DiningOut />} />
          <Route path="night_life" element={<NightLife />} />
          <Route
            path="/signup"
            element={
              <SignUp
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
              />
            }
          />
          <Route
            path="/login"
            element={
              <Login
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
              />
            }
          />
        </Route>
      </Routes>
    </Container>
  );
};

export default ZomatoApp;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
`;
