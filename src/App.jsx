import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Achievements from "./components/Achievements/Achievements";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Achievements />
      <Contact /> 
      <Footer />
      
    </div>
  );
}

export default App;