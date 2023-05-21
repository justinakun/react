// imports at the top
import "./App.css";
import FuncButton from "./components/FuncButton";
import FuncDiv from "./components/FuncDiv";
import ClassButton from "./components/ClassButton";
import ClassDiv from "./components/ClassDiv";
import Greeting from "./components/Greeting";
import Card from "./components/Card";
import Avatar from "./components/Avatar";
import Products from "./components/Products";
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
      <Products />
      <Avatar name="Justina Kunigonyte" />
      <Avatar name="Gediminas Narbutas" />
      <Avatar />
      <Card
        imageURL="https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/06/lizard-iguana-1296x728-header.jpg?w=1155&h=1528"
        title="Lizard"
        subtitle="Lizards are a widespread group of squamate reptiles, which over 6,000 species, ranging across all continents except Antarctica"
      />
      <Card
        imageURL="https://www.allaboutbirds.org/news/wp-content/uploads/2020/07/STanager-Shapiro-ML.jpg"
        title="Bird"
        subtitle="Birds are a group of warm-blooded vertebrates constituting the class Aves (/ˈeɪviːz/), characterised by feathers, and more."
      />
      <Card />
      <h1>Justina</h1>
      <h2>{name}</h2>
      <h2>{getName()}</h2>
      <h2>{getSurname()}</h2>
      <h2>{surname}</h2>
      <FuncButton title="Mygtukas" />
      <FuncButton />
      <FuncDiv title="Adele" />
      <FuncDiv />
      <ClassButton title="Yeaahhhh" />
      <ClassButton title="Neeeeeh" />
      <ClassButton />
      <ClassDiv title="zzzzz" />
      <ClassDiv />
      <Greeting />
      <Greeting name="Justina" />
    </div>
  );
}

// exportuojame, kad galetume importuoti kitame faile
export default App;
