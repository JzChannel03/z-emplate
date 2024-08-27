import { z } from "zod";
import ApiStore from "@z-emplate/services/api-service/api.store";
import { HttpInformation } from "@z-emplate/interfaces/https";
import { ParentComponent } from "@z-emplate/interfaces/component";
import { useMemo } from "react";

// Define the schema for HttpConfig
const httpConfigSchema = z.object({
  baseUrl: z.string().url(),
  token: z.string().optional(),
});

// Define the schema for the required `default` property
const defaultSchema = z.object({
  default: z.object({
    config: httpConfigSchema,
  }),
});

// Define the schema for HttpInformation that enforces the `default` property
const httpInformationSchema = defaultSchema.and(
  z.record(
    z.object({
      config: httpConfigSchema,
    })
  )
);

const ApiConfigProvider: ParentComponent<{
  httpInformationList: HttpInformation;
}> = ({ children, httpInformationList }) => {
  // Validate with Zod
  const parsedConfig = useMemo(() => {
    try {
      return httpInformationSchema.parse(httpInformationList);
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.error("Validation failed:", error.errors);
      }
      return { default: { config: { baseUrl: "", token: "" } } };
    }
  }, [httpInformationList]);

  // Create the ApiStore instance with the initial configuration
  ApiStore.createInstance(parsedConfig);

  return <>{children}</>;
};

export default ApiConfigProvider;
