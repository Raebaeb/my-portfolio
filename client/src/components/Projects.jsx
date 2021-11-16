import ProjectCard from "./ProjectCard";
import { projectList } from "../utils/projectObjects";
import cubclubImg from '../assets/cubclubImg.png';
import chromaticaImg from '../assets/desktop-chromatica-img.png';
import untoldImg from '../assets/untoldImg.png';

const Projects = () => {
  return (
    <section id='projects'>
      <ProjectCard className='light' project={projectList[1]} img={untoldImg}/>
      <ProjectCard className='dark' project={projectList[0]} img={chromaticaImg}/>
      <ProjectCard className='light' project={projectList[2]} img={cubclubImg}/>
    </section>
  );
};

export default Projects;