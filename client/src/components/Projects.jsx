import ProjectCard from "./ProjectCard";
import { projectList } from "../projectObjects";

const Projects = () => {
  return (
    <section>
      {projectList.map((project) => {
        <ProjectCard project={project} />
      })}
    </section>
  );
};

export default Projects;