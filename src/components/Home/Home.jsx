import "./Home.css";
import profileImage from "../../assets/Pandu-image.jpeg";
import resume from "../../assets/resume.pdf";

const Home = () => {

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "resume.pdf";
    link.click();
  }

  return (
    <section className="home-bar" id="hero">
      <div className="home-content">
        <h3>Hello, I'm</h3>
        <h1>Katasani Venkata Pandu Ranga Reddy</h1>
        <h2>Full Stack Developer</h2>

        <p>
          I build responsive web applications using React, Java, and modern
          web technologies while exploring AI-powered software solutions.
        </p>

        <div className="home-buttons">
          <button><a href="#projects">View Projects</a></button>
          <button onClick={handleDownload}>Download Resume</button>
        </div>
      </div>

      <div className="home-image">
        <img src={profileImage} alt="Pandu Ranga Reddy" />
      </div>
    </section>
  );
};

export default Home;