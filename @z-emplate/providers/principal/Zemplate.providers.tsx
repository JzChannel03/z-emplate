import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ParentComponent } from "../../interfaces/component";
import ApiConfigProvider from "../ApiServices.provider";
import { HttpInformation } from "@z-emplate/interfaces/https";

interface ZemplateProviderProps {
  apiConfigList: HttpInformation;
}

const ZemplateProvider: ParentComponent<ZemplateProviderProps> = ({
  children,
  apiConfigList,
}) => {
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
