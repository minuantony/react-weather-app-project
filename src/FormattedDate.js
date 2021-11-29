import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  console.log(props.date);
  let hours = props.date.getHours();

  if (hours > 12) {
    hours = hours - 12;
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let day = props.date.getDay();
  let whichDay = days[day];
  return (
    <div>
      {" "}
      {whichDay} {hours}:{minutes}
    </div>
  );
}
