import { useState } from "react";
import PropTypes from 'prop-types';
import "./Card.css";

const Card = ({ country }) => {
    const { flags, name } = country;
    const [inputValue, setInputValue] = useState("");
    const [output, setOutput] = useState("");

    const submitButtonClicked = () => {
        inputValue === name.common ? setOutput("You are correct!") : inputValue === "" ? setOutput(`Someone is feeling lazy today...`) : setOutput(`You are incorrect, the correct answer is ${name.common}`);

        setInputValue("");
    };

    const dontKnowButtonClicked = () => {
        setOutput(`Don't worry, it's the flag of ${name.common}, you'll get it right next time!`)
    }

  return (
    <div className="card">
        <input type="text" placeholder="Enter a country" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/><br/><br />
        <button className="buttonDark" onClick={submitButtonClicked}>Submit</button>
        <button className="buttonDark" onClick={dontKnowButtonClicked}>Oooops, I don't know</button><br /> <br />    
        <img src={flags.png} alt={name.common}></img>
        <h3>{output}</h3>      
    </div>
  )
}

Card.propTypes = {
    country: PropTypes.shape({
        flags: PropTypes.string.isRequired,
        name: PropTypes.object.isRequired
    })
}

export default Card