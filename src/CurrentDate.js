import React from "react";
import "./CurrentDate.css"

export default function CurrentDate(props) {
  let days = [
    "Sunday", 
    "Monday", 
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
  let months = [
    "January", 
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]

  let day = days[props.date.getDay()];
  let month = months[props.date.getMonth()];
  let date = props.date.getDate();
  let hours = props.date.getHours();
  
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      <p className="CurrentDate">
      <i className="far fa-calendar-alt"></i> {day}, {month} {date} <br /> <i className="far fa-clock"> </i> {" "} 
      {hours}:{minutes} 
      </p>
    </div>
  );
}
