import PropTypes from "prop-types";
const ServiceCard = ({ name, description }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

ServiceCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ServiceCard;
