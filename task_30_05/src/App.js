import "./App.css";
import Hero from "./components/Hero";
import Cards from "./components/Cards";

function App() {
  return (
    <div>
      <Hero />
      <div className="mainDiv">
        <div className="introDiv">
          <p className="bigger">Portfolio</p>
          <p>
            This is some text in Latin. I wasn't able to use lorem like I used
            to use it with html. This is some text in Latin. I wasn't able to
            use lorem like I used to use it with html. And so on and
            blahblahblah blahblah
          </p>
        </div>
        <div>
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default App;
