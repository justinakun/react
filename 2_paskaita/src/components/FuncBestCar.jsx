import { useState } from "react"
// funkciniam komponente nera zodelio this.
const FuncBestCar = () => {
    // state dedame tik reiksmes kurias norim atnaujinti
    const [color, setColor] = useState("red");

    const brand = "Ford";
    const model = "Mustang";
    const year = 1964;

    const changeColor =  () => {
        setColor("blue");
    }

    return (
        <div>
            <h1>My car {brand}</h1>
            <p>
                It is a {color} {model} from {year}
            </p>
            <button onClick={changeColor}>
                Change Color
            </button>
        </div>
    )
}

export default FuncBestCar