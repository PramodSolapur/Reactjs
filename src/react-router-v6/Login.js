import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

const Login = () => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    if (user) {
      login(user);
      navigate("/");
    } else {
      setError("Required!");
    }
  };
  return (
    <form autoComplete="off">
      <div className="form-group">
        <label htmlFor="username">User Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter user name"
          name="name"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </div>
      {error && <p>{error}</p>}

      {/* <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          name="email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          name="password"
        />
      </div> */}
      <button type="submit" className="btn btn-primary" onClick={handleLogin}>
        Submit
      </button>
    </form>
  );
};

export default Login;
