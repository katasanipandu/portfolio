import "./About.css";
import ProfileImage from "../../assets/pandu1.png";

import {
  FaGraduationCap,
  FaMapMarkerAlt,
  FaLaptopCode,
  FaDownload,
} from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-header">
        <h2>About Me</h2>

        <p>
          Get to know more about who I am,
          what I do, and what drives my passion
          for technology.
        </p>
      </div>

      <div className="about-container">

        {/* Left */}

        <div className="about-image">

          <img
            src={ProfileImage}
            alt="Pandu Ranga Reddy"
          />

        </div>

        {/* Right */}

        <div className="about-content">

          <h3>
            Hi, I'm
            <span> Pandu Ranga Reddy</span>
          </h3>

          <p>
            I'm a Computer Science undergraduate specializing
            in Data Science at CMR Engineering College with a
            strong interest in Software Engineering, Artificial
            Intelligence, and Full Stack Development.
          </p>

          <p>
            I enjoy designing and developing intelligent
            applications using technologies like React,
            Flask, LangChain, LangGraph, MySQL, and Python.
            My goal is to build impactful software that solves
            real-world problems while continuously learning
            modern technologies.
          </p>

          <div className="about-info">

            <div className="info-card">
              <FaGraduationCap />
              <div>
                <h4>Education</h4>
                <p>B.Tech - Data Science</p>
              </div>
            </div>

            <div className="info-card">
              <FaMapMarkerAlt />
              <div>
                <h4>Location</h4>
                <p>Hyderabad, India</p>
              </div>
            </div>

            <div className="info-card">
              <FaLaptopCode />
              <div>
                <h4>Interests</h4>
                <p>AI • Full Stack • Backend</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;