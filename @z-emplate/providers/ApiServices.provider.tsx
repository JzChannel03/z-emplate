/* eslint-disable react-hooks/exhaustive-deps */

import { z } from "zod";
import ApiStore from "@z-emplate/services/api-service/api.store";
import { HttpInformationList } from "@z-emplate/interfaces/https";
import { ParentComponent } from "@z-emplate/interfaces/component";

const ApiConfigProvider: ParentComponent<HttpInformationList> = ({
  children,
  httpInformationList,
}) => {
  httpInformationList.forEach((httpInformation) => {
    console.log("Cantidad de vueltas:", httpInformationList.length);
    console.log(httpInformation);
    console.log("Cantidad de vueltas:", httpInformationList.length);
    const configSchema = z.object({
      config: z.object({
        baseUrl: z.string().url(),
        token: z.string().optional(),
      }),
    });

    const parsedConfig = configSchema.parse(httpInformation);
    console.log(parsedConfig);
    const apiStoreInstance = ApiStore.getInstance();
    apiStoreInstance.addConfig(parsedConfig);
    console.log(apiStoreInstance.configByDefault.config);
  });

  return <>{children}</>;
};

export default ApiConfigProvider;
