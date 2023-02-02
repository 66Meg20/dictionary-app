import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          {" "}
          <h1>Dictionary</h1>
        </header>
        <Dictionary />
      </div>
      <footer>
        Coded by Megan Jackson and is opensourced on
        <a
          href="https://github.com/66Meg20/dictionary-app"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          GitHub{" "}
        </a>
      </footer>
    </div>
  );
}

export default App;
