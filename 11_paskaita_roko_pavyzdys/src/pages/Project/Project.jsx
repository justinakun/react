import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { getProject } from "../../api/projects";
import "./Project.scss";

const Project = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [people, setPeople] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    getProject(id)
      .then((response) => {
        setProject(response);
        setPeople(response.people);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="single-project">
      <img src={project.imageUrl} alt={project.title} className="image" />
      <div className="info-container">
        <h2>{project.title}</h2>
        <p className="description">{project.description}</p>
        <p className="more-info">
          This {project.client} project was started on {project.startingDate}{" "}
          and is due to be completed on {project.endingDate}
        </p>
        {people.length > 0 && (
          <div>
            <p>
              People that are working on this project:
              {people.map((person) => (
                <li>
                  {person.position} {person.name} {person.surname}
                </li>
              ))}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
