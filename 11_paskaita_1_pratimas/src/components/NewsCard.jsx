import PropTypes from "prop-types";
import "./NewsCard.css";

const NewsCard = ({ heading, text }) => {
  return (
    <div className="newsContainer">
      <h1>{heading}</h1>
      <p className="newsText">{text}</p>
    </div>
  );
};

NewsCard.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NewsCard;
