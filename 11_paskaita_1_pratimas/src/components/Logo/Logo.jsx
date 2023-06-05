import PropTypes from "prop-types";
import "./Logo.css";

const Logo = ({ imageURL, title }) => {
  return (
    <div className="logoImgDiv">
      <img className="logoImg" src={imageURL} alt={title} />
    </div>
  );
};

Logo.propTypes = {
  imageURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Logo;
