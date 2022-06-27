import React from "react";
import { Outlet } from "react-router-dom";

const Users = () => {
  return (
    <div>
      <ol>
        <li>User 1</li>
        <li>User 2</li>
        <li>User 3</li>
      </ol>
      <Outlet />
    </div>
  );
};

export default Users;
