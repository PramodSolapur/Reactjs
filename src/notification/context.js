import { useContext, createContext, useState } from "react";
import { notifications } from "./mockData";

const NotifyContext = createContext();

const borderColors = {
  info: "#b8daff",
  error: "#f5c6cb",
  warning: "#ffeeba",
  success: "#c3e6cb",
};

const NotifyContextProvider = ({ children }) => {
  const [UnreadNotificationsList, setUnreadNotificationList] =
    useState(notifications);

  const [readNotifications, setReadNotifications] = useState([]);

  const removeUnreadNotification = (id) => {
    setUnreadNotificationList((oldNotifications) =>
      oldNotifications.filter((notify) => notify.id !== id)
    );
  };

  const removeReadNotification = (id) => {
    setReadNotifications((oldNotifications) =>
      oldNotifications.filter((notify) => notify.id !== id)
    );
  };

  const handleReadNotification = (id) => {
    const notify = UnreadNotificationsList.find((noti) => noti.id === id);
    setUnreadNotificationList((oldNotifications) =>
      oldNotifications.filter((notify) => notify.id !== id)
    );
    setReadNotifications([...readNotifications, notify]);
  };
  return (
    <NotifyContext.Provider
      value={{
        UnreadNotificationsList,
        removeUnreadNotification,
        removeReadNotification,
        handleReadNotification,
        readNotifications,
        borderColors,
      }}
    >
      {children}
    </NotifyContext.Provider>
  );
};

export const useNotifyContext = () => {
  return useContext(NotifyContext);
};

export default NotifyContextProvider;
