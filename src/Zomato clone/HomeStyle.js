import React from "react";
import { Fragment } from "react";
import { Homestyle } from "./data";
import FoodItem from "./FoodItem";
const HomeStyle = () => {
  return (
    <Fragment>
      <h3>Home Style Food</h3>
      <div className="commanContainer">
        {Homestyle.map((food) => (
          <FoodItem key={food.id} {...food} />
        ))}
      </div>
    </Fragment>
  );
};

export default HomeStyle;
