
import "./Contact.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-header">
        <h2>Let's Connect 🚀</h2>

        <p>
          Have an opportunity, project, or just want to say hello?
          I'd love to hear from you.
        </p>
      </div>

      <div className="contact-container">
        {/* Left Side */}
        <div className="contact-info">

          <div className="card">
            <FaEnvelope className="icon" />
            <div>
              <h4>Email</h4>
              <p>katasanipandu@gmail.com</p>
            </div>
          </div>

          <div className="card">
            <FaPhone className="icon" />
            <div>
              <h4>Phone</h4>
              <p>+91 9573860088</p>
            </div>
          </div>

          <div className="card">
            <FaMapMarkerAlt className="icon" />
            <div>
              <h4>Location</h4>
              <p>Hyderabad, India</p>
            </div>
          </div>

          <div className="socials">
            <a
              href="https://github.com/katasanipandu"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/pandu-katasani99/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a href="mailto:katasanipandu@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Right Side */}
        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            required
          />

          <input
            type="text"
            placeholder="Subject"
            required
          />

          <textarea
            rows="6"
            placeholder="Write your message..."
          ></textarea>

          <button>
            Send Message
            <FaPaperPlane />
          </button>

        </form>
      </div>
    </section>
  );
}

export default Contact;