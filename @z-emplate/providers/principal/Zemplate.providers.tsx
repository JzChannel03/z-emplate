import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ParentComponent } from "../../interfaces/component";
import ApiConfigProvider from "../ApiServices.provider";

const ZemplateProvider: ParentComponent = ({ children }) => {
  const queryClient = new QueryClient();
  const apiConfigList = [
    { config: { baseUrl: "https://pokeapi.co/api/v2/" } },
    { config: { baseUrl: "https://jsonplaceholder.typicode.com/" } },
  ];

  return (
    <QueryClientProvider client={queryClient}>
      <ApiConfigProvider httpInformationList={apiConfigList}>
        {children}
      </ApiConfigProvider>
    </QueryClientProvider>
  );
};

export default ZemplateProvider;
