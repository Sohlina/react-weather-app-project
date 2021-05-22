import React, { useState } from "react";
import axios from "axios";
import "./Weather.css"
import CurrentDate from "./CurrentDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
  setWeatherData({
    ready: true,
    temperature: response.data.main.temp,
    humidity: response.data.main.humidity,
    maxTemperature: response.data.main.temp_max,
    minTemperature: response.data.main.temp_min,
    sunrise: new Date (response.data.sys.sunrise * 1000),
    sunset: new Date (response.data.sys.sunset * 1000),
    wind: response.data.wind.speed,
    description: response.data.weather[0].description,
    weatherIcon: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    feelsLike: response.data.main.feels_like,
    date: new Date (response.data.dt * 1000),
  });
}

if (weatherData.ready) {
return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input 
              type="search" 
              placeholder="Enter a city.." 
              className="form-control" 
              autoFocus="on" />
              </div>
              <div className="col-3">
            <button 
              type="button" 
              className="btn btn-dark w-100">Enter</button>
          </div>
        </div>
      </form>
      <h1>Queenstown</h1>
        <CurrentDate date={weatherData.date}/>
          <p className="text-capitalize">{weatherData.description}</p>
            <div className="row mt-5">
              <div className="col-6">
                <div className="clearfix">
                  <img 
                    src={weatherData.weatherIcon} 
                    alt={weatherData.description}
                    className="float-left"
                  />
                  <span className="temperature">{Math.round(weatherData.temperature)}</span>
                  <span className="unit">°C</span> 
              </div>
            </div>
        <div className="col-6">
         <ul>
           <li>Max temp: {Math.round(weatherData.maxTemperature)}°C </li>
           <li>Min temp: {Math.round(weatherData.minTemperature)}°C </li>
           <li>Humidity: {weatherData.humidity}% </li>
           <li>Wind: {Math.round(weatherData.wind)} m/s </li>
         </ul>
        </div>
        </div>
      </div>  
      );
} else {
  const apiKey = "36362df01ab1fd13299eeea7914024b2";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
 
  return "Loading city.."
}
  
}