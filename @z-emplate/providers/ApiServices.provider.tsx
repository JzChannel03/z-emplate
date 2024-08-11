import { z } from "zod";
import ApiStore from "@z-emplate/services/api-service/api.store";
import { HttpInformationList } from "@z-emplate/interfaces/https";
import { ParentComponent } from "@z-emplate/interfaces/component";
import { useMemo } from "react";

const ApiConfigProvider: ParentComponent<HttpInformationList> = ({
  children,
  httpInformationList,
}) => {
  const apiStore = ApiStore.getInstance();

  const parsedConfig = useMemo(() => {
    const configSchema = z.array(
      z.object({
        config: z.object({
          baseUrl: z.string().url(),
          token: z.string().optional(),
        }),
      })
    );
    return configSchema.parse(httpInformationList);
  }, [httpInformationList]);

  apiStore.setConfig(parsedConfig);

  return <>{children}</>;
};

export default ApiConfigProvider;
