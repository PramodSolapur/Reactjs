import React from "react";
import NotifyContextProvider from "./context";
import Notification from "./Notification";

const NotificationApp = () => {
  return (
    <NotifyContextProvider>
      <Notification />
    </NotifyContextProvider>
  );
};

export default NotificationApp;
