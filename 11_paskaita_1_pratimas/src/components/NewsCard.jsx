import PropTypes from "prop-types";

const NewsCard = ({ heading, text }) => {
  return (
    <div>
      <h1>{heading}</h1>
      <p>{text}</p>
    </div>
  );
};

NewsCard.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NewsCard;
