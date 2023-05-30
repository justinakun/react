import { useState } from "react";

const Inputs = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);

  const changeName = (event) => {
    setName(event.target.value);
  };

  const changeAge = (event) => {
    setAge(event.target.value);
  };

  const addTenYears = (event) => {
    setAge((previousAge) => +previousAge + 10);
  };

  return (
    <div>
      <div>
        <label htmlFor="name">First name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={changeName}
        ></input>
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input type="number" name="age" onChange={changeAge}></input>
        <button onClick={addTenYears}>Add 10 years</button>
      </div>
      <h3>
        {name} is {age} years old.
      </h3>
    </div>
  );
};

export default Inputs;
