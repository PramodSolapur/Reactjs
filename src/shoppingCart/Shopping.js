import React, { useState } from "react";
import Header from "./Header";
import ProductsList from "./ProductsList";
import ShoppingProvider from "./context";

const Shopping = () => {
  return (
    <ShoppingProvider>
      <Header />
      <ProductsList />
    </ShoppingProvider>
  );
};

export default Shopping;
