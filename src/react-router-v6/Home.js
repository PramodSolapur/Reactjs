import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

const Home = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  return (
    <div>
      <h1>
        Welcome to React router dom v6, <strong> {user?.toUpperCase()}</strong>
      </h1>

      {/* <Link to="/order-summary">
        <button>Place Order</button>
      </Link> */}

      <button onClick={() => navigate("/order-summary")}>Place Order</button>
    </div>
  );
};

export default Home;
