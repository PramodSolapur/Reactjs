import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Container>
      <h1>
        React <span>JS</span>
      </h1>
      <p>
        React is a Javascript front-end library for building
        user-interfaces.React was built by facebook in 2003
      </p>
      <p>
        State : it is essentially how to write a variable in react State is
        managed within the component and component has its own
        isolated(independent) state State allows components to create and manage
        thire own data.
      </p>
      <p>
        Props : Props are like parameters to the component. props are immutable.
        So, the props cannot be changed once it is initialized. they allows to
        pass data into a component and display it accordingly.
      </p>
    </Container>
  );
};

export default About;

const Container = styled.div`
  margin-top: 80px;
  h1 {
    color: #61dbfb;
    span {
      color: #f0db4f;
    }
  }
  p {
    line-height: 1.6;
    margin-bottom: 13px;
    text-align: justify;
  }
`;
