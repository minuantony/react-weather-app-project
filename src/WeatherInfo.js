import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul className="description">
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6 p-2">
          <img src={props.data.iconUrl} alt="" width="74" height="74" />
          <span className="temperature">{props.data.temperature}</span>
          <span className="unit">°C|F</span>
        </div>
        <div className="col-5 p-2">
          <ul>
            <li>Humidity:{props.data.humidity}%</li>
            <li>Wind: {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
