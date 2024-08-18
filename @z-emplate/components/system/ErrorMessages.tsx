import { getAlertProperties } from "@z-emplate/handlers/error";
import { ErrorHandlerProps } from "@z-emplate/interfaces/error";
import clsx from "clsx";

function ErrorMessages({
  error: { title, message, alertType },
}: ErrorHandlerProps) {
  const { color, icon, backgroundColor } = getAlertProperties(alertType);
  return (
    <div className="h-full">
      <h6
        className={clsx(
          color,
          "text-2xl font-bold flex flex-row gap-1 items-center"
        )}
      >
        {icon}
        {alertType.toUpperCase()}
      </h6>
      <div className="flex flex-col gap-5">
        <h2>{title}</h2>
        <code className={clsx(color, backgroundColor, " rounded-xl p-2")}>
          Message: {message}
        </code>
      </div>
    </div>
  );
}

export default ErrorMessages;
