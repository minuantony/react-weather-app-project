import React from "react";
import "./Weather.css";

export default function Weather() {
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
      <h1>New York</h1>
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
          <span className="temperature">9</span>
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
}
