import React, { Fragment } from "react";
import { Biryanies } from "./data";
import FoodItem from "./FoodItem";

const Biryani = () => {
  return (
    <Fragment>
      <h3>Biryani Food</h3>
      <div className="commanContainer">
        {Biryanies.map((food) => (
          <FoodItem key={food.id} {...food} />
        ))}
      </div>
    </Fragment>
  );
};

export default Biryani;
