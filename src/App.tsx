/* eslint-disable react-hooks/exhaustive-deps */
import { For, If } from "@z-emplate/components/ui";
import { useApiService } from "@z-emplate/hooks/api-service.hooks";
import { useEffect, useState } from "react";

function Hr() {
  return <hr className="border-4 border-red-500" />;
}

interface Pokemon {
  results: { id: number; name: string }[];
}

const teMostrare = true;

function App() {
  const [pokemon2, setPokemon2] = useState<Pokemon["results"]>([]);
  const { get } = useApiService({});

  useEffect(() => {
    get<Pokemon>("pokemon", { limit: 10, offset: 0 }).then((res) => {
      setPokemon2(res.results);
    });
  }, []);

  console.log("Pokemon2:", pokemon2);
  return (
    <main>
      <h1>If component:</h1>
      <If condition={teMostrare} altChildren={<p>No hay hijos</p>}>
        <h4>Te estoy mostrando</h4>
      </If>
      <For items={pokemon2}>
        {(pokemon) => (
          <div>
            <p>{pokemon.name}</p>
          </div>
        )}
      </For>
      <Hr />
    </main>
  );
}

export default App;
