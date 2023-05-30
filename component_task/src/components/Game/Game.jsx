import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Game.css";

const Game = ({ greeting, name }) => {
  const [countries, setCountries] = useState([]); //setting countries to an empty array
  const [randomCountryNumber, setRandomCountryNumber] = useState(0); // initially 0 (starts with Granada)
  const [inputValue, setInputValue] = useState(""); // initially an empty string
  const [output, setOutput] = useState(""); // initially an empty string

  const countriesExists = countries.length > 0; // initially false

  // getting all data from API and setting countries
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((resp) => resp.json())
      .then((response) => {
        setCountries(response);
      })
      .catch((error) => console.log(error));
  }, []);

  // when submit button is clicked, set output according to the input, and then set input to an empty string
  // the there is more than one condition, use if else, instead of ternary operators
  const submitButtonClicked = () => {
    if (inputValue === countries[randomCountryNumber].name.common) {
      setOutput("You are correct!");
    } else {
      if (inputValue === "") {
        setOutput(`Someone is feeling lazy today...`);
      } else {
        setOutput(
          `You are incorrect, the correct answer is ${countries[randomCountryNumber].name.common}`
        );
      }
    }
    setInputValue("");
  };

  // when the user clicks "gimme next one!", generate new random country number and set output to an empty string
  const nextCountryButton = () => {
    setRandomCountryNumber(Math.floor(Math.random() * 249));

    setOutput("");
  };

  // when the user doesn't know the country, give user the correct answer
  const dontKnowButtonClicked = () => {
    setOutput(
      `Don't worry, it's the flag of ${countries[randomCountryNumber].name.common}, you'll get it right next time!`
    );
  };

  return (
    <div className="cardDiv">
      {countriesExists && (
        <>
          <h1>
            {greeting}, {name}!
          </h1>
          <input
            type="text"
            placeholder="Enter a country"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <div className="topButtons">
            <button className="buttonDark" onClick={submitButtonClicked}>
              Submit
            </button>
            <button className="buttonDark" onClick={dontKnowButtonClicked}>
              Oooops, I don't know
            </button>
          </div>
          <img
            src={countries[randomCountryNumber]?.flags?.png}
            alt={countries[randomCountryNumber]?.name?.common}
          />
          <h3>{output}</h3>
          <button className="buttonDark" onClick={nextCountryButton}>
            Gimme next one!
          </button>
        </>
      )}
    </div>
  );
};

Game.propTypes = {
  greeting: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Game;
