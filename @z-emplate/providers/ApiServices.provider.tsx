/* eslint-disable react-hooks/exhaustive-deps */
import { z } from "zod";
import ApiStore from "@z-emplate/services/api-service/api.store";
import { HttpInformationList } from "@z-emplate/interfaces/https";
import { ParentComponent } from "@z-emplate/interfaces/component";
import { createContext, useEffect, useState } from "react";

export const ApiConfigContext = createContext<ApiStore>({} as ApiStore);

const ApiConfigProvider: ParentComponent<HttpInformationList> = ({
  children,
  httpInformationList,
}) => {
  const [apiStore, setApiStore] = useState<ApiStore>(ApiStore.getInstance());
  useEffect(() => {
    const configSchema = z.array(
      z.object({
        config: z.object({
          baseUrl: z.string().url(),
          token: z.string().optional(),
        }),
      })
    );
    const parsedConfig = configSchema.parse(httpInformationList);

    setApiStore(() => {
      const newApiStore = ApiStore.getInstance();
      newApiStore.setConfig(parsedConfig);
      newApiStore.setConfigByDefault(0);
      return newApiStore;
    });
  }, []);

  return (
    <ApiConfigContext.Provider value={apiStore}>
      {children}
    </ApiConfigContext.Provider>
  );
};

export default ApiConfigProvider;
