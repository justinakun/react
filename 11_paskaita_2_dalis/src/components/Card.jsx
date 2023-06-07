import PropTypes from "prop-types";
import "./Card.css";
import { useNavigate } from "react-router-dom";

const Card = ({ name, email, phone, website, userId }) => {
  const navigate = useNavigate("");

  const handleCardClick = (userId) => {
    console.log(userId);
    const id = String(userId);
    navigate(`/users/${id}`);
  };

  return (
    <div className="cardContainer" onClick={() => handleCardClick(userId)}>
      <h1>{name}</h1>
      <p>
        You can call {name} on {phone}, or alternatively you can send an email
        to the following address: {email}. If all fails, try visiting {website}{" "}
        and contact the user's company instead.
      </p>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
};

export default Card;
