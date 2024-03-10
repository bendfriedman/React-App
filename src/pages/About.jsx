import { Link } from "react-router-dom";
import { BoardHeader } from "../components/BoardHeader";

export const About = () => {
  return (
    <>
      <BoardHeader boardTitle={"About Us"} />
      <div className="content-box about-us">
        <div className="project-description">
          <h3>About this app</h3>
          <p>
            This is our second project in the Ironhack bootcamp and our first
            project with React. <br /> We decided to make a kanban board as we
            regularly use it ourselves during our web developer journey. A
            kanban board ist a great tool for managing projects by visually
            depicting the processes using cards.
          </p>
        </div>

        <hr className="about-hr" />

        <div id="team-section">
          <h3>Team Members</h3>

          {/* Marianas Profile */}
          <div className="team-member-container">
            <img
              className="profile-pic"
              src="./src/assets/images/Mariana-profile.jpeg"
              alt="image of mariana"
            />
            <div className="team-member-description">
              <div className="team-member-name">
                <h4>Mariana Godinho</h4>
                <div className="member-labels">
                  <div className="priority-label low"></div>
                  <div className="priority-label medium"></div>
                  <div className="priority-label high"></div>
                </div>
              </div>
              <ul className="team-socials">
                <li>
                  <Link to="https://github.com/marianaGOD" target="_blank">
                    <img
                      className="img-social"
                      src="./src/assets/images/github-white.png"
                      alt="image github"
                    />
                    <div>GitHub</div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.linkedin.com/in/mariana-batalha-dos-loios/"
                    target="_blank"
                  >
                    <img
                      className="img-social"
                      src="./src/assets/images/linkedin.png"
                      alt="image linkedin"
                    />
                    <div>LinkedIn</div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bens Profile */}
          <div className="team-member-container">
            <img
              className="profile-pic"
              src="./src/assets/images/Ben-profile.jpg"
              alt="image of ben"
            />
            <div className="team-member-description">
              <div className="team-member-name">
                <h4>Benjamin Friedman</h4>
                <div className="member-labels">
                  <div className="priority-label low"></div>
                  <div className="priority-label medium"></div>
                  <div className="priority-label high"></div>
                </div>
              </div>
              <ul className="team-socials">
                <li>
                  <Link to="https://github.com/bendfriedman" target="_blank">
                    <img
                      className="img-social"
                      src="./src/assets/images/github-white.png"
                      alt="image github"
                    />
                    <div>GitHub</div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.linkedin.com/in/benjamindfriedman/"
                    target="_blank"
                  >
                    <img
                      className="img-social"
                      src="./src/assets/images/linkedin.png"
                      alt="image linkedin"
                    />
                    <div>LinkedIn</div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
