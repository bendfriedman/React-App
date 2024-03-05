import "./App.css";
import logo from "./assets/react.svg";
import data from "./assets/data.json";
import data2 from "./assets/data2.json";
import List from "./components/List";

function App() {
  return (
    <>
      <header>
        <img id="logo" src={logo} alt="image of logo" />
        <h1>React App</h1>
        <div></div>
      </header>
      <div className="sidebar">
        <ul>
          {" "}
          <a href="#">
            {" "}
            <li>Home</li>{" "}
          </a>
          <a href="#">
            <li>About</li>
          </a>
          <a href="#">
            <li>Something</li>
          </a>
        </ul>
      </div>
      <main>
        <section id="board-header">
          <h3>Name of the board</h3>
        </section>
        <section id="list-section">
          <List data={data} />
          <List data={data2} />
        </section>
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
