import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div classNmae="row">
        <form className="form mt-3">
          <div className="row">
            <div className="col-8">
              <input
                type="text"
                placeholder="Type a city"
                className="form-control"
              />
            </div>
            <div className="col-2">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <h3>New York</h3>
        <ul className="description">
          <li>Tuesday 15:22</li>
          <li>Broken Clouds</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
              alt=""
            />
            9°C
          </div>
          <div className="col-5">
            <ul>
              <li>Humidity: 44%</li>
              <li>Wind: 0.45km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
