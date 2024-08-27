import { HttpInformation } from "@z-emplate/interfaces/https";
import { ENVIRONMENT_VARIABLES } from "../../env";

export const apiConfigList: HttpInformation = {
  default: {
    config: { baseUrl: ENVIRONMENT_VARIABLES.API1_BASE_URL },
  },
  jsonPlaceholder: {
    config: { baseUrl: ENVIRONMENT_VARIABLES.API2_BASE_URL },
  },
};
