import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import "./User.css";
import { useLocation } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const location = useLocation();
  const isClickable = location.pathname === "/users";

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((resp) => resp.json())
      .then((response) => {
        setUser(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div className="oneCardDiv">
      <Card
        className="card"
        key={user.id}
        name={user.name}
        email={user.email}
        phone={user.phone}
        username={user.username}
        userId={user.id}
        isClickable={isClickable}
      />
    </div>
  );
};

export default User;
