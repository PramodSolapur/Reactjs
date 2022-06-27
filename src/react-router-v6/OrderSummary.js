import React from "react";
import { Link, useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Order Has been Confirmed</h1>
      {/* <Link to="/">
        <button>Go Home</button>
      </Link> */}

      <button onClick={() => navigate(-1)}>Go Home</button>
    </div>
  );
};

export default OrderSummary;
