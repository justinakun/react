import "./Photo.css";
import PropTypes from 'prop-types';

const Photo = ({imageURL, title}) => {
  return (
    <div>
        <img src={imageURL} alt={title} />
        <h1>{title}</h1>
    </div>
  )
};

Photo.propTypes = {
    imageURL: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default Photo;