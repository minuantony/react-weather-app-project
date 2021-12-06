import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  let now = new Date(props.data.dt * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = now.getDay();
  day = days[day];
  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day">{day}</div>
      <div className="WeatherForecast-icon">
        <WeatherIcon code={props.data.weather[0].icon} size={40} />
      </div>
      <div className="WeatherForecast-temperature">
        {" "}
        <span className="WeatherForecast-temperature-max">
          {Math.round(props.data.temp.max)}°{" "}
        </span>{" "}
        <span className="WeatherForecast-temperature-min">
          {Math.round(props.data.temp.min)}°
        </span>
      </div>
    </div>
  );
}
