import { useState, useEffect } from "react";
import Card from "../Card/Card";
import "./Cards.css";

const Cards = () => {
    const [countries, setCountries] = useState([]);
    const countriesExists = countries.length > 0;
    const [randomCountryNumber, setRandomCountryNumber] = useState(0);
    

    useEffect(() => {        
        fetch(`https://restcountries.com/v3.1/all`)
        .then((resp) => resp.json())
        .then((response) => {
            setCountries(response);
        })
        .catch((error) => console.log (error))        
    }, [])

    const nextCountryButton = () => {
        setRandomCountryNumber(Math.floor(Math.random() * 249));
    }
   
  return (
    <div>
        {countriesExists && (
            <>
                <h1>GUESS THE FLAG!</h1>
                <Card country = {countries[randomCountryNumber]}/>               
                <button className="buttonDark" onClick={nextCountryButton}>Gimme next one!</button>   
            </>            
        )}        
    </div>
  )
}

export default Cards