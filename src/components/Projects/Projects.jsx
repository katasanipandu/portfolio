import "./Projects.css";

import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

// Import screenshots

import walmartImg from "../../assets/walmart.png";


function Projects() {
  const projects = [
    {
      title: "Walmart Sales Data Analysis",
      image: walmartImg,
      description:
        "Analyzed over 1,000 Walmart transactions using MySQL to discover sales trends, customer behavior, and business insights through advanced SQL queries and exploratory data analysis.",
      tech: [
        "MySQL",
        "SQL",
        "EDA",
      ],
      github: "https://github.com/katasanipandu/WalmartAnalysis",
      demo: "#",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <h2>Featured Projects</h2>

        <p>
          A selection of projects that demonstrate my
          expertise in AI, backend development,
          databases, and software engineering.
        </p>
      </div>

      <div className="projects-container">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <img
              src={project.image}
              alt={project.title}
            />

            <div className="project-content">

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">

                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}

              </div>

              <div className="project-buttons">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>
    </section>
  );
}

export default Projects;