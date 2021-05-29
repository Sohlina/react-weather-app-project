import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.forecast.temp.max);
    return `${temperature}`;
  }

  function minTemperature() {
    let temperature = Math.round(props.forecast.temp.min);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.forecast.dt * 1000);
    let day = date.getDay();
    let days = [
      "Sun", 
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat"
    ];
    return days[day];
  }

  return (
  <div className="ForecastDay">
   <div className="Forecast-day">{day()}</div> 
     <WeatherIcon code={props.forecast.weather[0].icon} size={40} />
      <div className="Forecast-temperature">
       <span className="Forecast-temperature-max">{maxTemperature()}°</span> 
      <span className="Forecast-temperature-min">{minTemperature()}°</span>      
    </div>
  </div>
);
}