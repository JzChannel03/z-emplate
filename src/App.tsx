import { For, If } from "@z-emplate/components/ui";

function Hr() {
  return <hr className="border-4 border-red-500" />;
}

function App() {
  const teMostrare = true;
  const items = ["item 1", "item 2", "item 3"];
  return (
    <main>
      <h1>If component:</h1>
      <If condition={teMostrare} altChildren={<p>No hay hijos</p>}>
        <h4>Te estoy mostrando</h4>
      </If>
      <Hr />
      <h1>For component</h1>
      <For items={items}>{(item, index) => <div key={index}>{item}</div>}</For>
      <Hr />
    </main>
  );
}

export default App;
