import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  let [loaded, setLoaded] = useState(false);
  let [city, setCity] = useState("");
  let [weatherData, setWeatherData] = useState({});

  function showResponse(response) {
    setWeatherData({
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png",
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      city: response.data.name,
    });
    setLoaded(true);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "6f7afd3770eb32dd0f8cf4d22a38e396";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showResponse);
  }

  function updateChange(event) {
    setCity(event.target.value);
  }
  if (loaded) {
    return (
      <div className="Weather">
        <form className="form mt-3" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-8">
              <input
                type="text"
                placeholder="Type a city"
                className="form-control"
                autoFocus="on"
                onChange={updateChange}
              />
            </div>
            <div className="col-2">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul className="description">
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6 p-2">
            <img src={weatherData.iconUrl} alt="" width="64" height="64" />
            <span className="temperature">{weatherData.temperature}</span>
            <span className="unit">°C|F</span>
          </div>
          <div className="col-5 p-2">
            <ul>
              <li>Humidity:{weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <form className="form mt-3" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-8">
              <input
                type="text"
                placeholder="Type a city"
                className="form-control"
                autoFocus="on"
                onChange={updateChange}
              />
            </div>
            <div className="col-2">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <br />
      </div>
    );
  }
}
