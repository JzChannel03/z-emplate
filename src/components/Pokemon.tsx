/* eslint-disable react-hooks/exhaustive-deps */
import { For } from "@z-emplate/components/ui";
import { useApiService } from "@z-emplate/hooks/api-service.hooks";
import { useEffect, useState } from "react";

interface IPokemonData {
  results: { id: number; name: string }[];
}

function Pokemon() {
  const [pokemon2, setPokemon2] = useState<IPokemonData["results"]>([]);
  //TODO: Select the config by the name of the api
  const { get } = useApiService();

  useEffect(() => {
    get<IPokemonData>("pokemon", { limit: 10, offset: 0 }).then((res) => {
      console.log(res);
      setPokemon2(res.results);
    });
  }, []);

  return (
    <div>
      <For items={pokemon2}>
        {(pokemon) => (
          <div>
            <p>{pokemon.name}</p>
          </div>
        )}
      </For>
    </div>
  );
}

export default Pokemon;
