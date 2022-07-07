import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import Pricing from "./Pricing";
import Training from "./Training";

const GlrTrvlApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/training" element={<Training />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default GlrTrvlApp;
