import "./Education.css";

import CMRLogo from "../../assets/cmr.png";
import NarayanaLogo from "../../assets/narayana.png";
import SchoolLogo from "../../assets/sri-sai.png";

function Education() {
  return (
    <section className="education" id="education">
      <div className="education-header">
        <h2>Education</h2>
        <p>My Academic Journey</p>
      </div>

      <div className="education-map">

        {/* SVG Path */}
        <svg
          className="education-path"
          viewBox="0 0 1200 950"
          preserveAspectRatio="none"
        >

          <defs>

            <marker
              id="arrow"
              markerWidth="12"
              markerHeight="12"
              refX="6"
              refY="6"
              orient="auto"
            >

              <path
                d="M0,0 L12,6 L0,12 Z"
                fill="#ffffff"
              />

            </marker>

          </defs>

          {/* School -> Intermediate */}
          <path
              d="M160 85 Q420 130 630 390"
              className="svg-line"
              markerEnd="url(#arrow)"
          />

          {/* Intermediate -> College */}
          <path
              d="M665 450 L665 640 Q665 700 210 700"
              className="svg-line"
              markerEnd="url(#arrow)"
          />

        </svg>

        {/* ================= School ================= */}

        <div className="node school">

          <div className="node-circle">
            <img
              src={SchoolLogo}
              alt="School"
            />
          </div>

          <div className="node-card">

            <h3>SSC</h3>

            <h4>Sri Sai Saraswathi Vidyaniketan</h4>

            <p>CGPA : 10.0</p>

            <span>2020</span>

          </div>

        </div>

        {/* ================= Intermediate ================= */}

        <div className="node intermediate">

          <div className="node-circle">
            <img
              src={NarayanaLogo}
              alt="Narayana"
            />
          </div>

          <div className="node-card">

            <h3>Intermediate</h3>

            <h4>Narayana Junior College</h4>

            <p>Percentage : 97.1%</p>

            <span>2020 - 2022</span>

          </div>

        </div>

        {/* ================= College ================= */}

        <div className="node college">

          <div className="node-circle">
            <img
              src={CMRLogo}
              alt="CMR"
            />
          </div>

          <div className="node-card">

            <h3>B.Tech</h3>

            <h4>CMR Engineering College</h4>

            <p>Computer Science & Engineering (Data Science)</p>

            <p>CGPA : 9.34</p>

            <span>2022 - 2026</span>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;