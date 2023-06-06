import PropTypes from "prop-types";
import "./TaskImage.css";

const TaskImage = ({ imageURL, title }) => {
  return (
    <div className="taskImageContainer">
      <img class="taskImage" src={imageURL} alt={title} />
    </div>
  );
};

TaskImage.propTypes = {
  imageURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default TaskImage;
