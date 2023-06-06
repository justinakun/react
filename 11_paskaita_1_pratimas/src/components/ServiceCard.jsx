import PropTypes from "prop-types";
import "./ServiceCard.css";

const ServiceCard = ({ name, description }) => {
  return (
    <div className="serviceCardContainer">
      <h3>{name}</h3>
      <p className="serviceCardDescription">{description}</p>
    </div>
  );
};

ServiceCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ServiceCard;
