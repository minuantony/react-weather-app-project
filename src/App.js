import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="wrap">
          <h1> Weather App</h1>
          <div className="row border">
            <Weather />
          </div>
          <footer>
            {" "}
            This project was coded by Minu Antony and is{" "}
            <a
              href="https://github.com/minuantony/react-weather-app-project"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
            and hosted on Netlify
          </footer>
        </div>
      </div>
    </div>
  );
}
