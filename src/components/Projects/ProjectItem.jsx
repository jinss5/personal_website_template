import './Projects.css';

const ProjectItem = ({ title, imageUrl, githubLink, demoLink }) => {
  return (
    <div className="details-container color-container">
      <div className="article-container">
        <img src={imageUrl} alt={title} className="project-img" />
      </div>
      <h2 className="experience-sub-title project-title">{title}</h2>
      <div className="btn-container">
        <a
          href={githubLink}
          className="custom-btn outlined"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          href={demoLink}
          className="custom-btn outlined"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
