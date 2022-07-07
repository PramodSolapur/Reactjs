import React from "react";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import Navbar from "../components/Navbar";
import PricingCards from "../components/Pricing";

const Pricing = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="PRICING" text="CHOOSE YOUR TRIP." />
      <PricingCards />
      <Footer />
    </div>
  );
};

export default Pricing;
