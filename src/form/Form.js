import React from "react";
import { useState } from "react";

const Form = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    gender: "male",
  };
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateData(formData));
    if (Object.keys(errors).length === 0) {
      setFormData(initialValues);
    }
  };

  const validateData = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.name) {
      errors.name = "Required!";
    }
    if (!values.email) {
      errors.email = "Required!";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid Email ID!";
    }
    if (!values.password) {
      errors.password = "Required!";
    } else if (values.password.length < 4) {
      errors.password = "Should contain minimum 4 characters!";
    } else if (values.password.length > 8) {
      errors.password = "Should contain maximum 8 characters!";
    }
    if (!values.company) {
      errors.company = "Select Company";
    }
    return errors;
  };
  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      {Object.keys(errors).length === 0 && (
        <pre>{JSON.stringify(formData, undefined, 2)}</pre>
      )}

      <div className="form-group">
        <label htmlFor="username">User Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter user name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      {errors.name && (
        <div class="alert alert-danger" role="alert">
          {errors.name}
        </div>
      )}

      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      {errors.email && (
        <div class="alert alert-danger" role="alert">
          {errors.email}
        </div>
      )}
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      {errors.password && (
        <div class="alert alert-danger" role="alert">
          {errors.password}
        </div>
      )}
      <div className="radio__btns">
        <p htmlFor="gender">Select Gender: </p>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="male"
            onChange={handleChange}
            checked={formData.gender === "male"}
          />
          <label className="form-check-label">Male</label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="female"
            onChange={handleChange}
            checked={formData.gender === "female"}
          />
          <label className="form-check-label">Female</label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="other"
            onChange={handleChange}
            checked={formData.gender === "other"}
          />
          <label className="form-check-label">Other</label>
        </div>
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect1">Example select</label>
        <select className="form-control" name="company" onChange={handleChange}>
          <option>select company</option>
          <option value="TCS">TCS</option>
          <option value="INFY">INFY</option>
          <option value="CGI">CGI</option>
          <option value="CTS">CTS</option>
          <option value="CAPI">CAPI</option>
        </select>
      </div>
      {errors.company && (
        <div class="alert alert-danger" role="alert">
          {errors.company}
        </div>
      )}
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
