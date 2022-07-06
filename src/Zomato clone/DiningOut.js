import React, { Fragment } from "react";
import { DiningoutRes } from "./data";
import FoodItem from "./FoodItem";

const DiningOut = () => {
  return (
    <Fragment>
      <h3>Best Dining Restaurants near you in Bangalore</h3>
      <div className="commanContainer">
        {DiningoutRes.map((food) => (
          <FoodItem key={food.id} {...food} />
        ))}
      </div>
    </Fragment>
  );
};

export default DiningOut;
