export interface ErrorHandlerProps {
  title: string;
  message: string;
  errorThrow: Error;
  alertType: "info" | "error" | "warning" | "fatal";
  id: string;
}
