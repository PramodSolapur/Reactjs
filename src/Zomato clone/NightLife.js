import React, { Fragment } from "react";
import FoodItem from "./FoodItem";
import { nightLife } from "./data";

const NightLife = () => {
  return (
    <Fragment>
      <h3>Nightlife Restaurants in Bangalore</h3>
      <div className="commanContainer">
        {nightLife.map((food) => (
          <FoodItem key={food.id} {...food} />
        ))}
      </div>
    </Fragment>
  );
};

export default NightLife;
