import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import styled from "styled-components";
import { useNotifyContext } from "./context";

const ReadNotify = () => {
  const { readNotifications, removeReadNotification } = useNotifyContext();
  return (
    <ReadContainer>
      <h3>Read Messages</h3>
      {readNotifications?.map(({ id, icon, message }) => {
        return (
          <Notify key={id}>
            <p className="icon"> {icon}</p>
            <p>{message}</p>
            <MdOutlineCancel
              className="icon"
              onClick={() => removeReadNotification(id)}
            />
          </Notify>
        );
      })}
    </ReadContainer>
  );
};

export default ReadNotify;

const ReadContainer = styled.div`
  width: 100%;
  height: 300px;
  scroll-behavior: smooth;
  overflow-y: scroll;
`;

const Notify = styled.div`
  width: 90%;
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f3f3f3;
  padding: 0px 10px;
  p {
    cursor: pointer;
  }
  .icon {
    font-size: 20px;
    cursor: pointer;
  }
`;
