import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row border">
          <Weather />
        </div>
        <footer>
          {" "}
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/minu-antony-30806036"
            target="_blank"
            rel="noreferrer"
          >
            Minu Antony
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/minuantony/react-weather-app-project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://unruffled-tereshkova-ec8cf0.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
