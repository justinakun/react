import Car from "./components/Car";
import FuncCar from "./components/FuncCar";
import FuncBestCar from "./components/FuncBestCar";
import Counter from "./components/Counter";
import Hero from "./components/Hero";
import Button from "./components/Button";
import MoodChecker from "./components/MoodChecker";
import "./App.css";

const App = () => {
  return (
    <div>
      <MoodChecker />
      <Button />
      <Button variant="text" title="TEXT" />
      <Button variant="contained" title="CONTAINED" />
      <Button variant="outlined" title="OUTLINED" />
      <br />
      <br />
      <Hero />
      <Hero title="Info title" subtitle="Info subtitle" />
      <Counter />
      <h2>Class</h2>
      <Car />
      <h2>Function with one state</h2>
      <FuncCar />
      <h2>Function with separate states</h2>
      <FuncBestCar />
    </div>
  );
};

export default App;
