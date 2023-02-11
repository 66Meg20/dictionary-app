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
        <Dictionary defaultKeyword="book" />
      </div>
      <br />
      <footer>
        This project was coded by Megan Jackson and is open-sourced on
        <a
          href="https://github.com/66Meg20/dictionary-app"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          GitHub{" "}
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://fabulous-raindrop-a15715.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
