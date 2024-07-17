import { If, For } from "@z-emplate/components/ui";
import { ApiServices } from "@z-emplate/services";

function Hr() {
  return <hr className="border-4 border-red-500" />;
}

function App() {
  const api = ApiServices();
  const changeApiUrl = () => {
    const config = {
      apiUrl: "https://api.github.com",
      token: "ghp_123456789012345678901234",
    };
    api.setApiConfig(config);
  };
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
      <button onClick={changeApiUrl}>Change api url</button>
    </main>
  );
}

export default App;
