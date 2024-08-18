import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ApiConfigProvider from "./ApiServices.provider";
import { ParentComponent } from "@z-emplate/interfaces/component";
import useErrorListStore from "@z-emplate/stores/error-handler.store";

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

  return (
    <QueryClientProvider client={queryClient}>
      <ApiConfigProvider httpInformationList={apiConfigList}>
        {children}
        {/* <ErrorHandler  /> */}
      </ApiConfigProvider>
    </QueryClientProvider>
  );
};

export default ZemplateProvider;
