import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import styled from "styled-components";
import { useNotifyContext } from "./context";

const UnreadNotify = () => {
  const {
    UnreadNotificationsList,
    removeUnreadNotification,
    handleReadNotification,
    borderColors,
  } = useNotifyContext();
  return (
    <UnreadContainer>
      <h3>UnRead Messages</h3>
      {UnreadNotificationsList.map(({ id, icon, message, varient }) => {
        const color = Object.keys(borderColors).find(
          (bColor) => varient === bColor
        );
        return (
          <Notify key={id} bcolor={borderColors[color]}>
            <MsgCon onClick={() => handleReadNotification(id)}>
              <span className="icon"> {icon}</span>
              <p>{message}</p>
            </MsgCon>

            <MdOutlineCancel
              className="icon"
              onClick={() => removeUnreadNotification(id)}
            />
          </Notify>
        );
      })}
    </UnreadContainer>
  );
};

export default UnreadNotify;

const UnreadContainer = styled.div`
  width: 100%;
  height: 300px;
  scroll-behavior: smooth;
  overflow-y: scroll;
`;

const MsgCon = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  p {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Notify = styled.div`
  width: 90%;
  margin: 10px auto;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  border: ${(props) => `1px solid ${props.bcolor}`};
  color: ${(props) => `${props.bcolor}`};
  background-color: #111;
  padding: 0px 10px;
  .icon {
    font-size: 20px;
  }
`;
