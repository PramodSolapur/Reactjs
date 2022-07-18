import { BiError } from "react-icons/bi";
import { ImCancelCircle } from "react-icons/im";
import { GiCheckMark } from "react-icons/gi";
import { BsInfoCircle } from "react-icons/bs";

export const notifications = [
  {
    id: 1,
    varient: "info",
    icon: <BsInfoCircle />,
    message: "Hi, This is Info Message",
  },
  {
    id: 2,
    varient: "warning",
    icon: <BiError />,
    message: "Hi, This is Warning Message",
  },
  {
    id: 3,
    varient: "error",
    icon: <ImCancelCircle />,
    message: "Hi, This is Error Message",
  },
  {
    id: 4,
    varient: "success",
    icon: <GiCheckMark />,
    message: "Hi, This is success Message",
  },
];
