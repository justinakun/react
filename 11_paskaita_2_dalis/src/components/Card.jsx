import PropTypes from "prop-types";
import "./Card.css";
import { useNavigate } from "react-router-dom";

const Card = ({ name, username, userId, phone, email, isClickable }) => {
  const navigate = useNavigate("");

  const handleCardClick = (userId) => {
    const id = String(userId);
    navigate(`/users/${id}`);
  };

  return (
    <div
      className="cardContainer"
      onClick={isClickable ? () => handleCardClick(userId) : undefined}
    >
      <div className="softCornerDiv"></div>
      <h1>{name}</h1>
      <p className="cardDescription">
        This user goes by the nickname {username}. You can call her on {phone},
        or email her at {email}.
      </p>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  username: PropTypes.string,
  userId: PropTypes.number,
  isClickable: PropTypes.bool,
};

export default Card;
