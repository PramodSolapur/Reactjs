import React, { Fragment } from "react";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineCancel } from "react-icons/md";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const SignUp = ({ setIsModalOpen, isModalOpen }) => {
  const navigate = useNavigate();
  return (
    <Fragment>
      {isModalOpen && (
        <FullContainer className="overlay">
          <Signup>
            <TopContent>
              <h4>Sign Up</h4>
              <MdOutlineCancel
                onClick={() => {
                  setIsModalOpen(!isModalOpen);
                  navigate("/");
                }}
                style={{ cursor: "pointer" }}
              />
            </TopContent>
            <FormContainer>
              <form>
                <InputContainer>
                  <input type="text" placeholder="Full Name" />
                </InputContainer>
                <InputContainer>
                  <input type="email" placeholder="Email" />
                </InputContainer>
                <Condition>
                  <input type="checkbox" />
                  <p>
                    I agree to Zomato's{" "}
                    <span> Terms of Service, Privacy Policy</span>
                    and <span> Content Policies</span>
                  </p>
                </Condition>
                <button type="submit">Create Account</button>
              </form>
              <GoogleContainer>
                <FcGoogle className="icon" />
                <span>Continue With Google</span>
              </GoogleContainer>
              <p>
                Already have an account? <Link to="/login">Log in</Link>
              </p>
            </FormContainer>
          </Signup>
        </FullContainer>
      )}
    </Fragment>
  );
};

export default SignUp;

const FullContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Signup = styled.div`
  width: 30%;
  height: 400px;
  background-color: #fff;
  border-radius: 5px;
`;

const TopContent = styled.div`
  display: flex;
  padding: 20px 40px;
  justify-content: space-between;
  align-items: center;
`;
const FormContainer = styled.div`
  width: 90%;
  margin: auto;
  form {
    width: 100%;
    button {
      width: 100%;
      border: 1px solid #ccc;
      outline: none;
      padding: 7px;
      font-size: 16px;
      letter-spacing: 1.8px;
      border-radius: 3px;
    }
  }
  p {
    margin-top: 10px;
    font-size: 16px;
    a {
      color: tomato;
    }
  }
`;

const InputContainer = styled.div`
  width: 100%;
  height: 40px;
  margin: 10px 0px;
  input {
    border: 1px solid #ccc;
    width: 100%;
    height: 100%;
    outline: none;
    padding: 5px;
    border-radius: 3px;
  }
`;
const Condition = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    margin-left: 20px;
    font-size: 13px;
    span {
      color: tomato;
    }
  }
`;
const GoogleContainer = styled.div`
  width: 100%;
  border: 1px solid #ccc;
  outline: none;
  padding: 7px;
  font-size: 16px;
  letter-spacing: 1.8px;
  border-radius: 3px;
  text-align: center;
  margin-top: 10px;
  span {
    margin-left: 20px;
  }
`;
