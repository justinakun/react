// imports at the top
import FuncButton from "./components/FuncButton";
import "./App.css";

// apibreziam komponento pavadinima, visada didzioji raide
// geroji praktika: failo pavadinimas toks pat kaip komponento pavadinimas
function App() {
  const name = "Justina";

  function getName() {
    return "Tadas";
  }

  const getSurname = () => {
    return "Tadukas";
  };

  const surname = getSurname();

  return (
    <div>
      <h1>Justina</h1>
      <h2>{name}</h2>
      <h2>{getName()}</h2>
      <h2>{getSurname()}</h2>
      <h2>{surname}</h2>
      <FuncButton title="Click me" />
      <FuncButton title="Spausk mane" />
      <FuncButton title="Cia nespausti" />
    </div>
  );
}

// exportuojame, kad galetume importuoti kitame faile
export default App;
