import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ApiConfigProvider from "./ApiServiceProvider";
import { ParentComponent } from "@z-emplate/interfaces/component";
import useErrorListStore from "@z-emplate/stores/error-handler.store";
import ErrorHandler from "@z-emplate/components/system/ErrorHandler";
import { ErrorBoundary } from "react-error-boundary";

//TODO: Get all the configs from the env and by props in ZemplateProvider, and create a file with all the configs to pass to ZemplateProvider
const apiConfigList = {
  default: {
    config: { baseUrl: "https://pokeapi.co/api/v2/" },
  },
  jsonPlaceholder: {
    config: { baseUrl: "https://jsonplaceholder.typicode.com/" },
  },
};

const ZemplateProvider: ParentComponent = ({ children }) => {
  const queryClient = new QueryClient();
  const { getFirstError } = useErrorListStore();
  console.log(getFirstError());

  return (
    <QueryClientProvider client={queryClient}>
      <ApiConfigProvider httpInformationList={apiConfigList}>
        <ErrorBoundary
          fallback={<ErrorHandler error={getFirstError()?.error} />}
        >
          {children}
        </ErrorBoundary>
      </ApiConfigProvider>
    </QueryClientProvider>
  );
};

export default ZemplateProvider;
