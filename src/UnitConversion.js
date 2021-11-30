import React, { useState } from "react";

export default function UnitConversion(props) {
  let [unit, setUnit] = useState("Celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("Fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("Celsius");
  }
  if (unit === "Celsius") {
    return (
      <div className="UnitConversion">
        <span className="temperature">
          {Math.round(props.celsiustemperature)}
        </span>
        <span className="unit">
          °C|
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = Math.round((props.celsiustemperature * 9) / 5 + 32);
    return (
      <div className="UnitConversion">
        <span className="temperature">{fahrenheit}</span>
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            °C
          </a>
          | °F
        </span>
      </div>
    );
  }
}
