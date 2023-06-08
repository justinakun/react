import Card from "../components/Card";
import { useState, useEffect } from "react";
import "./Users.css";
import { useLocation } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const location = useLocation();
  const isClickable = location.pathname === "/users";

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((response) => setUsers(response))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="allCardsContainer">
      <div className="intro">LEARN MORE ABOUT THE USERS</div>
      {users.length > 0 &&
        users.map((user) => (
          <Card
            key={user.id}
            name={user.name}
            email={user.email}
            phone={user.phone}
            username={user.username}
            userId={user.id}
            isClickable={isClickable}
          />
        ))}
    </div>
  );
};
export default Users;
