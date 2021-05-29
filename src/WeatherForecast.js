import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "36362df01ab1fd13299eeea7914024b2";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="Forecast-day">Thu</div> 
            <WeatherIcon code="01d" size={40} />
            <div className="Forecast-temperature">
              <span className="Forecast-temperature-max">19°</span> 
              <span className="Forecast-temperature-min">10°</span>
            </div>
          </div>
        </div>
      </div>
    );
}