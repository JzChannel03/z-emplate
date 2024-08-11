/* eslint-disable react-hooks/exhaustive-deps */
import { useApiService } from "@z-emplate/hooks/api-service.hooks";
import { useEffect } from "react";

function Countries() {
  const { get } = useApiService({ configSelected: 2 });

  useEffect(() => {
    get("todos/1").then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div>
      {/* <For items={pokemon2}>
        {(pokemon) => (
          <div>
            <p>{pokemon.name}</p>
          </div>
        )}
      </For> */}
      Hola
    </div>
  );
}

export default Countries;
