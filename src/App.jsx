import "./App.css";
import logo from "./assets/react.svg";

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
          <a href="#">
            <li>Home</li>
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
        <section id="list-section">test</section>
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
