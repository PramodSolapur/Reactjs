import React from "react";
import { data } from "./data";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="container my-4">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">FirstName</th>
            <th scope="col">LastName</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((person) => {
            const { id, fname, lname, email } = person;
            return (
              <tr key={id}>
                <th scope="row">{id}</th>
                <td>{fname}</td>
                <td>{lname}</td>
                <td>{email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Outlet />
    </div>
  );
};

export default Home;
