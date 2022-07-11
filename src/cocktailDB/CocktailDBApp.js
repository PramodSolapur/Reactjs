import React from "react";
import { AppProvider } from "./context";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import CocktailConatiner from "./CocktailContainer";
import Details from "./Details";

const CocktailDBApp = () => {
  return (
    <AppProvider>
      <Header />
      <Routes>
        <Route path="/" element={<CocktailConatiner />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </AppProvider>
  );
};

export default CocktailDBApp;
