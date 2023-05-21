import { useState } from "react"
// funkciniam komponente nera zodelio this.
const FuncCar = () => {
    const [state, setState] = useState({
        brand: "Ford",
        model: "Mustang",
        color: "red",
        year: 1964
    });

    // const changeColor =  () => {
    //     setState({ ...state, color: "blue" });
    // }

    const changeColor = () => {
        // 1 budas pasiimti is state objekta
        setState ({ ...state, color: "blue"});

         // 2 budas pasiimti is setState objekta
        setState((previousState) => ({ ...previousState, color: "blue"}));

       // 3 budas pasiimti is setState objekta, bet su return
        setState((previousState) => {
            return { ...previousState, color: "blue"};
        }) 
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