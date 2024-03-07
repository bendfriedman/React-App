import "./App.css";
import logo from "./assets/react.svg";
import { Route, Routes, Link } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { About } from "./pages/About";
import { NotFound } from "./pages/NotFound";
import userImg from "./assets/user.png";
import { ItemDetails } from "./pages/ItemDetails";
import data from "./assets/data.json";
import { useState } from "react";
import { NewCard } from "./components/NewCard";

function App() {
  const [cardData, setCardData] = useState(data);

  return (
    <>
      <header>
        <img id="logo" src={logo} alt="image of logo" />
        <h1>React App</h1>
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
          <Link to="/create-card">
            <li>+ New List Item +</li>
          </Link>
        </ul>
      </div>
      <main>
        <Routes>
          <Route
            path="/"
            element={<HomePage cardData={cardData} setCardData={setCardData} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/card/:cardId"
            element={<ItemDetails cardData={cardData} />}
          />
          <Route
            path="/create-card"
            element={<NewCard cardData={cardData} setCardData={setCardData} />}
          />
        </Routes>
      </main>
      {/* Popup has to be here to be ontop of everything. */}
      <Routes>
        <Route
          path="/create-card"
          element={<NewCard cardData={cardData} setCardData={setCardData} />}
        />
      </Routes>
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
