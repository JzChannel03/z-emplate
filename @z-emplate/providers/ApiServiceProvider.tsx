import { z } from "zod";
import ApiStore from "@z-emplate/services/api-service/api.store";
import { HttpInformation } from "@z-emplate/interfaces/https";
import { ParentComponent } from "@z-emplate/interfaces/component";
import { useMemo } from "react";

// Define el esquema para HttpConfig
const httpConfigSchema = z.object({
  baseUrl: z.string().url(),
  token: z.string().optional(),
});

// Define el esquema para HttpInformation
const httpInformationSchema = z.record(
  z.object({
    config: httpConfigSchema,
  })
);

const ApiConfigProvider: ParentComponent<{
  httpInformationList: HttpInformation;
}> = ({ children, httpInformationList }) => {
  // Validar con Zod
  const parsedConfig = useMemo(() => {
    try {
      return httpInformationSchema.parse(httpInformationList);
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.error("Validation failed:", error.errors);
      }
      return {}; // Devuelve un objeto vacío en caso de error de validación
    }
  }, [httpInformationList]);

  // Crear la instancia de ApiStore con la configuración inicial
  ApiStore.createInstance(parsedConfig);

  return <>{children}</>;
};

export default ApiConfigProvider;
