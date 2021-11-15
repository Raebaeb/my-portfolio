import cubclubImg from '../assets/cubclubImg.png';
import chromaticaImg from '../assets/chromaticaImg.png';
import untoldImg from '../assets/untoldImg.png';
import { Link } from 'react-router-dom';


const ProjectCard = ({ project }) => {
  return (
    <div className='project-container'>
      <Link to={project.url} target='_blank' rel='noopener noreferrer' className='project-title'>{project.title}</Link> | <Link path={project.github} target='_blank' rel='noopener noreferrer' className='project-github'>GitHub</Link> 
      <h4>{project.desc}</h4>
      <img src={project.asset} alt={`${project.title} homepage`} />
    </div>
  );
};

export default ProjectCard;