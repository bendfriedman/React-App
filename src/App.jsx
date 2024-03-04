import "./App.css";
import logo from "./assets/react.svg";

function App() {
  return (
    <>
      <header>
        <img src={logo} />
        <p>React App</p>
      </header>
      <div class="sidebar">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
        </ul>
      </div>
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
