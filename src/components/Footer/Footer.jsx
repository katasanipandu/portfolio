// Footer.jsx
import "./Footer.css";
import GitHubIcon from "../../assets/github.png";
import LinkedInIcon from "../../assets/linkedin.png";
import EmailIcon from "../../assets/email.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3>Katasani Venkata Pandu Ranga Reddy</h3>

        <p>Thanks for visiting my portfolio!</p>

        <div className="footer-links">
          <a href="https://github.com/katasanipandu" target="_blank" rel="noopener noreferrer">
            <img src={GitHubIcon} alt="GitHub" className="footer-icon" />
          </a>
          <a href="https://www.linkedin.com/in/pandu-katasani99/" target="_blank" rel="noopener noreferrer">
            <img src={LinkedInIcon} alt="LinkedIn" className="footer-icon" />
          </a>
          <a href="mailto:katasanipandu@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={EmailIcon} alt="Email" className="footer-icon" />
          </a>
        </div>

        <p>© 2026 Katasani Venkata Pandu Ranga Reddy. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;