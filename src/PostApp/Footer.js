import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <h4>Copyright&copy; {new Date().getFullYear()} </h4>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 80%;
  background-color: #61dbfb;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  letter-spacing: 1.5px;
  color: gray;
`;
