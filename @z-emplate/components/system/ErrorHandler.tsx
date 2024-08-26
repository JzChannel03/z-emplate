import clsx from "clsx";
import { If } from "../ui";
import { CloseIcon } from "@z-emplate/assets/icons/svg";
import { ErrorHandlerProps } from "@z-emplate/interfaces/error";
import ErrorMessages from "./ErrorMessages";
import ErrorStack from "./ErrorStack";
import { getAlertProperties, getAlertStyle } from "@z-emplate/handlers/error";

const ErrorHandler = ({ error }: ErrorHandlerProps) => {
  if (!error) return <></>;

  const { errorThrow, alertType } = error;

  const alertStyle = getAlertStyle(alertType);
  const { closable } = getAlertProperties(alertType);

  return (
    <div className={clsx(alertStyle, "fixed text-white p-8")}>
      <div className="relative w-full h-full flex flex-col lg:flex-row lg:gap-8">
        <If condition={closable}>
          <div className="absolute -right-0.5 -top-1 text-2xl cursor-pointer hover:text-gray-400 duration-300">
            <CloseIcon />
          </div>
        </If>
        <ErrorMessages error={error}></ErrorMessages>
        <ErrorStack stack={errorThrow.stack}></ErrorStack>
      </div>
    </div>
  );
};

export default ErrorHandler;
