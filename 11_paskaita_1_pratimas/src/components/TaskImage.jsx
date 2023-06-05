import PropTypes from "prop-types";

const TaskImage = ({ imageURL, title }) => {
  return (
    <div>
      <img src={imageURL} alt={title} />
    </div>
  );
};

TaskImage.propTypes = {
  imageURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default TaskImage;
