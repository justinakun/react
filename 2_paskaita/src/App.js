import Car from "./components/Car";
import FuncCar from "./components/FuncCar";
import FuncBestCar from "./components/FuncBestCar";
import Counter from "./components/Counter";

const App = () => {
  return (
    <div>
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
