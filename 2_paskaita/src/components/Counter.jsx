// Sukurkite komponentą Counter kuris atvaizduos du mygtukus ir skaičių. Nuspaudus mygtuką skaičius turi padidėti +1 arba -1. Pradinis skaičius yra 0.

import { useState } from 'react'

const Counter = () => {
    const[number, setNumber] = useState(0);

    const increaseNumber = () => {
        setNumber(number + 1)
        // setNumber((previousNumber) => previousNumber + 1) // Rokas example
    }

    const decreaseNumber = () => {
        setNumber(number - 1)
        //setNumber((previousNumber) => previousNumber - 1) // Rokas example
    }

    const reset = () => {
        setNumber(0);
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={increaseNumber}>Add 1</button>
            <button onClick={decreaseNumber}>Subtract 1</button>
            <button onClick={reset}>Reset count</button>
        </div>
    )
}

export default Counter