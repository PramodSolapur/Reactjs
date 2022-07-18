import React from "react";
import styled from "styled-components";
import ReadNotify from "./ReadNotify";
import UnreadNotify from "./UnreadNotify";

const Notification = () => {
  return (
    <NotifyContainer>
      <UnreadNotify />
      <ReadNotify />
    </NotifyContainer>
  );
};

export default Notification;

const NotifyContainer = styled.div`
  width: 90%;
  margin: auto;
  margin: 30px;
  display: flex;
  flex-direction: column;
`;
