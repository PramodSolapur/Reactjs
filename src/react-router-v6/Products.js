import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Search Products"
      />
      <nav>
        <Link to="featured">Featured</Link>
        <Link to="newProducts">New</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Products;
