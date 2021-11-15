import ProjectCard from "./ProjectCard";
import { projectList } from "../projectObjects";
import cubclubImg from '../assets/cubclubImg.png';
import chromaticaImg from '../assets/chromaticaImg.png';
import untoldImg from '../assets/untoldImg.png';

const Projects = () => {
  return (
    <section id='projects'>
      <ProjectCard class='light' project={projectList[0]} img={chromaticaImg}/>
      <ProjectCard class='dark' project={projectList[1]} img={untoldImg}/>
      <ProjectCard class='light' project={projectList[2]} img={cubclubImg}/>
    </section>
  );
};

export default Projects;