import {
  FatalIcon,
  WarningIcon,
  ErrorIcon,
  InfoIcon,
} from "@z-emplate/assets/icons/svg";
import { ErrorHandlerProps } from "@z-emplate/interfaces/error";

export const getAlertProperties = (
  alertType: ErrorHandlerProps["alertType"]
): {
  icon: JSX.Element;
  color: string;
  closable: boolean;
  backgroundColor: string;
} => {
  switch (alertType) {
    case "fatal":
      return {
        icon: <FatalIcon />,
        color: "text-red-900",
        closable: false,
        backgroundColor: "bg-[#9a8c8c]",
      };
    case "warning":
      return {
        icon: <WarningIcon />,
        color: "text-yellow-300",
        closable: true,
        backgroundColor: "bg-[#9a8c8c]",
      };
    case "error":
      return {
        icon: <ErrorIcon />,
        color: "text-red-500",
        closable: false,
        backgroundColor: "bg-[#9a8c8c]",
      };
    case "info":
    default:
      return {
        icon: <InfoIcon />,
        color: "text-blue-600",
        closable: true,
        backgroundColor: "bg-white",
      };
  }
};

export const getAlertStyle = (alertType: ErrorHandlerProps["alertType"]) => {
  let alertStyle;
  switch (alertType) {
    case "info":
      alertStyle =
        "bg-blue-800 bottom-2/4 left-2/4 text-white w-4/6 h-3/6 rounded-xl transform -translate-x-2/4 translate-y-2/4 shadow-xl";
      break;
    case "error":
      alertStyle = "bg-red-500 top-0 text-white w-screen h-screen";
      break;
    case "warning":
      alertStyle =
        "bg-yellow-800 bottom-2/4 left-2/4 text-white w-4/6 h-3/6 rounded-xl transform -translate-x-2/4 translate-y-2/4 shadow-xl";
      break;
    case "fatal":
      alertStyle = "bg-red-500 top-0 text-white w-screen h-screen";
      break;
  }
  return alertStyle;
};
