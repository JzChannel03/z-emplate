import { RefreshIcon } from "@z-emplate/assets/icons/svg";
import { getAlertProperties } from "@z-emplate/handlers/error";
import { ErrorHandlerProps } from "@z-emplate/interfaces/error";
import clsx from "clsx";

function RefreshPageButton() {
  return (
    <button
      className="bg-white opacity-50 text-black rounded-b-xl p-4 flex flex-row items-center justify-center font-bold gap-2 text-center select-none cursor-pointer hover:text-gray-400 duration-300"
      onClick={() => window.location.reload()}
    >
      <RefreshIcon />
      Refresh the page when you solved.
    </button>
  );
}

function ErrorMessages({
  error: { title, message, alertType },
}: Readonly<{ error: ErrorHandlerProps }>) {
  const { color, icon, backgroundColor } = getAlertProperties(alertType);
  return (
    <div className="h-full w-full lg:w-3/6">
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
        <div className="flex flex-col h-full">
          <code
            className={clsx(
              color,
              backgroundColor,
              " rounded-t-xl p-2 overflow-y-auto"
            )}
          >
            Message: {message}
          </code>
          <RefreshPageButton></RefreshPageButton>
        </div>
      </div>
    </div>
  );
}

export default ErrorMessages;
