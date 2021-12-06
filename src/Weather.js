import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather() {
  let [city, setCity] = useState("");
  let [weatherData, setWeatherData] = useState({ loaded: false });

  function showResponse(response) {
    console.log(response.data);
    setWeatherData({
      loaded: true,
      date: new Date(response.data.dt * 1000),
      cordinates: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      city: response.data.name,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "6f7afd3770eb32dd0f8cf4d22a38e396";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showResponse);
  }

  function updateChange(event) {
    setCity(event.target.value);
    setWeatherData({ weatherData, loaded: false });
  }

  if (weatherData.loaded) {
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
        <div>
          <WeatherInfo data={weatherData} />
        </div>
        <div>
          <WeatherForecast coordinates={weatherData.cordinates} />
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
