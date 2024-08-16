import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ParentComponent } from "../../interfaces/component";
import ApiConfigProvider from "../ApiServices.provider";

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

  return (
    <QueryClientProvider client={queryClient}>
      <ApiConfigProvider httpInformationList={apiConfigList}>
        {children}
      </ApiConfigProvider>
    </QueryClientProvider>
  );
};

export default ZemplateProvider;
