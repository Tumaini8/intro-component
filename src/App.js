import "./App.css";
import Intro from "./Intro";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <Intro />
          <p className="info text-center mt-3">
            Project created using react and it is an{" "}
            <a
              href="https://github.com/Tumaini8/intro-component"
              rel="noreferrer"
              target="_blank"
            >
              open-source from GITHUB
            </a>
          </p>
        </header>
      </div>
    </div>
  );
}

export default App;
