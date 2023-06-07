import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import "./User.css";

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);

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
        name={user.name}
        email={user.email}
        phone={user.phone}
        website={user.website}
      />
    </div>
  );
};

export default User;
