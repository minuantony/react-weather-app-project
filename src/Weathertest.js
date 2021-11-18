import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  let [temperature, setTemperature] = useState(null);
  let [loaded, setLoaded] = useState(false);
let [weatherData, setWeatherData] = useState({});

  function showResponse(response) {
    console.log(response.data);
    setTemperature(Math.round(response.data.main.temp));
    setWeatherData({
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
    });
  if (loaded) {
    let city = "London";
    return (
      <div className="Weather">
        <form className="form mt-3">
          <div className="row">
            <div className="col-8">
              <input
                type="text"
                placeholder="Type a city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-2">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <h1>{city}</h1>
        <ul className="description">
          <li>Tuesday 15:22</li>
          <li>Broken Clouds</li>
        </ul>
        <div className="row">
          <div className="col-6 p-2">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
              alt=""
              width="64"
              height="64"
            />
            <span className="temperature">{temperature}</span>
            <span className="unit">°C|F</span>
          </div>
          <div className="col-5 p-2">
            <ul>
              <li>Humidity: 44%</li>
              <li>Wind: 0.45km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let city = "London";
    let apiKey = "04dd91307ec56c5bdc7c8b53d6799c73";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showResponse);
    return (
      <div>
        <form className="form mt-3">
          <div className="row">
            <div className="col-8">
              <input
                type="text"
                placeholder="Type a city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-2">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <h4>Loading..</h4>
      </div>
    );
  }
}
