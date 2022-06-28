import { useState, useReducer } from "react";

const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialState = {
  name: "",
  email: "",
  password: "",
  gender: "male",
};

const formReducer = (state, action) => {
  if (action.type === "ONCHANGE") {
    return {
      ...state,
      [action.field]: action.payload,
    };
  }
  if (action.type === "SHOW_DATA") {
    return {
      ...state,
    };
  }
  return state;
};

const FormReducer = () => {
  const [state, disptach] = useReducer(formReducer, initialState);
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);
  const handleChange = (e) => {
    disptach({
      type: "ONCHANGE",
      field: e.target.name,
      payload: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateData(state));
    if (Object.keys(errors).length === 0) {
      disptach({ type: "SHOW_DATA" });
      setShow(true);
    }
  };

  const validateData = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required!";
    }
    if (!values.email) {
      errors.email = "Required!";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid Email!";
    }
    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 4) {
      errors.password = "password should contain min 4 characters";
    } else if (values.password.length > 8) {
      errors.password = "password should contain max 8 characters";
    }
    if (!values.company) {
      errors.company = "Required!";
    }
    return errors;
  };
  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <pre>
        {show &&
          Object.keys(errors).length === 0 &&
          JSON.stringify(state, undefined, 2)}
      </pre>
      <div className="form-group">
        <label htmlFor="username">User Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter user name"
          name="name"
          value={state.name}
          onChange={handleChange}
        />
        {errors.name && (
          <div className="alert alert-danger" role="alert">
            {errors.name}
          </div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        {errors.email && (
          <div className="alert alert-danger" role="alert">
            {errors.email}
          </div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          name="password"
          value={state.password}
          onChange={handleChange}
        />
        {errors.password && (
          <div className="alert alert-danger" role="alert">
            {errors.password}
          </div>
        )}
      </div>
      <div className="radio__btns">
        <p htmlFor="gender">Select Gender: </p>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="male"
            onChange={(e) =>
              disptach({ type: "ONCHANGE", field: "gender", payload: "male" })
            }
          />
          <label className="form-check-label">Male</label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="female"
            onChange={(e) =>
              disptach({ type: "ONCHANGE", field: "gender", payload: "female" })
            }
          />
          <label className="form-check-label">Female</label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value="other"
            onChange={(e) =>
              disptach({ type: "ONCHANGE", field: "gender", payload: "other" })
            }
          />
          <label className="form-check-label">Other</label>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlSelect1">Select Company</label>
        <select className="form-control" name="company" onChange={handleChange}>
          <option>select company</option>
          <option value="TCS">TCS</option>
          <option value="INFY">INFY</option>
          <option value="CGI">CGI</option>
          <option value="CTS">CTS</option>
          <option value="CAPI">CAPI</option>
        </select>
        {errors.company && (
          <div className="alert alert-danger" role="alert">
            {errors.company}
          </div>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default FormReducer;
