import ProjectItem from "./ProjectItem.jsx";
import './Projects.css'
import Container from "../helpers/Container.jsx";
import projectImage from "../../assets/project.png"

const Projects = () => {
  const projectsData = [
    {
      title: "Project One",
      imageUrl: projectImage,
      githubLink: "https://github.com/",
      demoLink: "https://github.com/",
    },
    {
      title: "Project Two",
      imageUrl: projectImage,
      githubLink: "https://github.com/",
      demoLink: "https://github.com/",
    },
    {
      title: "Project Three",
      imageUrl: projectImage,
      githubLink: "https://github.com/",
      demoLink: "https://github.com/",
    },
  ];

  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <Container>
        {projectsData.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </Container>
    </section>
  );
};

export default Projects;
