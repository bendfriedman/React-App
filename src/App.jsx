import "./App.css";
import logo from "./assets/react.svg";
import data from "./assets/data.json";
import data2 from "./assets/data2.json";
import List from "./components/List";
import { Route, Routes, Link } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { About } from "./pages/About";
import { NotFound } from "./pages/NotFound";
import userImg from "./assets/user.png";

function App() {
  return (
    <>
      <header>
        <img id="logo" src={logo} alt="image of logo" />
        <h1>React App - Kanban Board</h1>
        <div></div>
      </header>
      <div className="sidebar">
        <Link to="/notFound">
          <div id="sidebar-user-container">
            <img className="user-img" src={userImg} alt="" />
            <h5>User</h5>
          </div>
        </Link>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="board-header">
                  <h3>Name of the board</h3>
                </section>
                <section id="list-section">
                  <List data={data} />
                  <List data={data2} />
                </section>
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer>
        <p>
          Here is the link to the{" "}
          <a href="https://github.com/bendfriedman/React-App" target="_blank">
            GitHub repository
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
