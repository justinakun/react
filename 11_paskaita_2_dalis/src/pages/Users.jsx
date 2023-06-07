import Card from "../components/Card";
import { useState, useEffect } from "react";
import "./Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((response) => setUsers(response))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="allCardsContainer">
      {users.length > 0 &&
        users.map((user) => (
          <Card
            key={user.id}
            name={user.name}
            email={user.email}
            phone={user.phone}
            website={user.website}
            userId={user.id}
          />
        ))}
    </div>
  );
};
export default Users;
