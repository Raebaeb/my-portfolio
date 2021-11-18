const ProjectCard = ({ project, img, className }) => {
  return (
    <div className={`project-container ${className}`}>
      <article><a href={project.url} target='_blank' rel='noopener noreferrer' className='project-title'>{project.title}</a> | <a href={project.github} target='_blank' rel='noopener noreferrer' className='project-github'>GitHub</a></article>
      <p>{project.desc}</p>
      <img src={img} alt={`${project.title} homepage`} />
    </div>
  );
};

export default ProjectCard;