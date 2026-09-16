import "./Skills.css";

import {
  FaCode,
  FaGlobe,
  FaDatabase,
  FaTools,
  FaRobot,
  FaUsers,
} from "react-icons/fa";

function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      icon: <FaCode />,
      skills: ["Python", "C++", "Java"],
    },
    {
      title: "Web Development",
      icon: <FaGlobe />,
      skills: ["HTML", "CSS", "React", "Flask"],
    },
    {
      title: "AI / Machine Learning",
      icon: <FaRobot />,
      skills: [
        "LangChain",
        "LangGraph",
        "Prompt Engineering",
        "Machine Learning",
        "RAG",
        "MCP",
      ],
    },
    {
      title: "Database",
      icon: <FaDatabase />,
      skills: ["MySQL"],
    },
    {
      title: "Tools & Core CS",
      icon: <FaTools />,
      skills: [
        "Git",
        "GitHub",
        "DSA",
        "OOPS",
        "DBMS",
        "CN",
        "OS",
      ],
    },
    {
      title: "Soft Skills",
      icon: <FaUsers />,
      skills: [
        "Leadership",
        "Communication",
        "Teamwork",
        "Adaptability",
      ],
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-header">
        <h2>Skills</h2>

        <p>
          My technical expertise, tools, and technologies that I use
          to build scalable software and AI-powered applications.
        </p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{category.icon}</div>

            <h3>{category.title}</h3>

            <div className="skill-tags">
              {category.skills.map((skill, i) => (
                <span key={i}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;