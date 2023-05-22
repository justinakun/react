import { useState } from "react"

const MoodChecker = () => {

    const[message, setMessage] = useState("Kaip jaučiatės?");

    const feelingBad = () => {
        setMessage("Nieko tokio, viskas bus gerai")
    }
    const feelingOkay = () => {
        setMessage("Gerai, nujaučiu, kad greitu metu jausitės puikiai")
    }
    const feelingGood = () => {
        setMessage("Smagu girdėti, taip ir toliau")
    }

    return (
        <div className="divMood">
            <h2 className="msgMood">{message}</h2>
            <button onClick={feelingBad} className="btnMood">Jaučiuosi prastai :(</button>
            <button onClick={feelingOkay} className="btnMood">Jaučiuosi normaliai :|</button>
            <button onClick={feelingGood} className="btnMood">Jaučiuosi puikiai :)</button>
        </div>
    )
}

export default MoodChecker