import "./Achievements.css";
import {
  FaMedal,
  FaAward,
  FaCode,
  FaUsers,
} from "react-icons/fa";

function Achievements() {
  const achievements = [
    {
      icon: <FaMedal />,
      title: "Academic Excellence",
      description:
        "Secured 3rd Position for outstanding academic performance during the 2022–2023 academic year.",
    },
    {
      icon: <FaAward />,
      title: "Diamond Badge - Smart Interviews",
      description:
        "Completed the DSA course from Smart Interviews and earned the Diamond Badge by ranking among the Top 50 out of 400+ participants in the final contest.",
    },
    {
      icon: <FaCode />,
      title: "Gold Badge - HackerRank",
      description:
        "Earned the Gold Badge in Problem Solving on HackerRank by solving algorithmic and coding challenges.",
    },
    {
      icon: <FaUsers />,
      title: "Tech Fest Organizer",
      description:
        "Organized the college technical fest attended by over 300 students, managing logistics and coordinating the event successfully.",
    },
  ];

  return (
    <section className="achievements" id="achievements">
      <div className="achievements-header">
        <h2>Achievements</h2>

        <p>
          Milestones that showcase my academic excellence,
          leadership, and problem-solving journey.
        </p>
      </div>

      <div className="achievement-grid">
        {achievements.map((item, index) => (
          <div className="achievement-card" key={index}>
            <div className="achievement-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;