import "./App.css";
import logo from "./assets/react.svg";
import { Route, Routes, Link } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { About } from "./pages/About";
import { NotFound } from "./pages/NotFound";
import userImg from "./assets/images/user2.png";
import { ItemDetails } from "./pages/ItemDetails";
import data from "./assets/data.json";
import { useState } from "react";
import { NewCard } from "./components/NewCard";
import { UpdateCard } from "./components/UpdateCard";
import { User } from "./pages/User";

function App() {
  const [cardData, setCardData] = useState(data);

  return (
    <>
      <header>
        <Link to="/">
          <img id="logo" src={logo} alt="image of logo" />
        </Link>
        <h1>React App</h1>
        <div></div>
      </header>

      <div className="sidebar">
        <Link to="/user">
          <div id="sidebar-user-container">
            <img className="user-img" src={userImg} alt="" />
            <h5>User</h5>
          </div>
        </Link>
        <ul>
          <Link to="/">
            <li>Dashboard</li>
          </Link>

          <Link to="/about">
            <li>About</li>
          </Link>
        </ul>

        <Link to="/create-card">
          <button id="create-btn">+ Create New Card +</button>
        </Link>
      </div>
      {/* Popup has to be here to be ontop of everything. */}

      <Routes>
        <Route
          path="/card-edit/:cardId"
          element={<UpdateCard cardData={cardData} setCardData={setCardData} />}
        />
        <Route
          path="/create-card"
          element={<NewCard cardData={cardData} setCardData={setCardData} />}
        />
      </Routes>

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
          <Route path="/user" element={<User />} />

          <Route
            path="/create-card"
            element={<HomePage cardData={cardData} setCardData={setCardData} />}
          />
          <Route
            path="/card-edit/:cardId"
            element={<ItemDetails cardData={cardData} />}
          />
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
