export interface ErrorHandlerProps {
  error: {
    title: string;
    message: string;
    errorThrow: Error;
    alertType: "info" | "error" | "warning" | "fatal";
    id: string;
  };
}
