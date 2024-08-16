/* eslint-disable react-hooks/exhaustive-deps */
import { If } from "@z-emplate/components/ui";
import Pokemon from "./components/Pokemon";
import Countries from "./components/Countries";

function Hr() {
  return <hr className="border-4 border-red-500" />;
}

const teMostrare = true;

function App() {
  return (
    <main>
      <h1>If component:</h1>
      <If condition={teMostrare} altChildren={<p>No hay hijos</p>}>
        <h4>Te estoy mostrando</h4>
      </If>
      <Hr />
      <Pokemon />
      <Hr />
      <Countries />
      <Hr />
    </main>
  );
}

export default App;
