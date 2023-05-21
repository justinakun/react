import { useState } from "react"
// funkciniam komponente nera zodelio this.
const FuncCar = () => {
    const [state, setState] = useState({
        brand: "Ford",
        model: "Mustang",
        color: "red",
        year: 1964
    });

    const changeColor =  () => {
        setState({ ...state, color: "blue" });
    }

    return (
        <div>
            <h1>My car {state.brand}</h1>
            <p>
                It is a {state.color} {state.model} from {state.year}
            </p>
            <button onClick={changeColor}>
                Change Color
            </button>
        </div>
    )

}

export default FuncCar