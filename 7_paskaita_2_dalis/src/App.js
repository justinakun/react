// importas is react
import { createContext } from "react";
import Toolbar from "./components/Toolbar";
import Card from "./components/Card/Card";
import Avatar from "./components/Avatar/Avatar";
import Greeting from "./components/Greeting/Greeting";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};
// Sukuriamas context kintamasis su pradine reikšme createContext(themes.light)
// exportuojamas, kad galėtume naudoti kituose failuose
export const ThemeContext = createContext(themes.light);

const App = () => {
  //  <ThemeContext.Provider value={themes.dark}> užwrappinam komponentą kuris turės parametrus (paveldi ir vaikai)
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
      <Card />
      <Avatar />
      <Greeting />
    </ThemeContext.Provider>
  );
};

export default App;
