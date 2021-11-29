import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
export default function Weather() {
  let [loaded, setLoaded] = useState(false);
  let [city, setCity] = useState("");
  let [weatherData, setWeatherData] = useState({});

  function showResponse(response) {
    console.log(response.data);
    setWeatherData({
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      city: response.data.name,
    });
    setLoaded(true);
    console.log(response.data.weather[0].icon);
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
        <WeatherInfo data={weatherData} />
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
