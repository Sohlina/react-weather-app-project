import React, { useState } from "react";
import axios from "axios";
import "./Weather.css"
import CurrentWeatherInfo from "./CurrentWeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {

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
    icon: response.data.weather[0].icon, 
    feelsLike: response.data.main.feels_like,
    city: response.data.name,
    date: new Date (response.data.dt * 1000),
  });
}

function search() {
  const apiKey = "36362df01ab1fd13299eeea7914024b2";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event) {
  event.preventDefault();
  search();
}

function handleCityInput(event) {
  setCity(event.target.value);
}

if (weatherData.ready) {
return (
  <div className="Weather">
  <form onSubmit={handleSubmit}>
    <div className="row">
      <div className="col-9">
        <input 
          type="search" 
          placeholder="Enter a city.." 
          className="form-control" 
          autoFocus="on" 
          onChange={handleCityInput} />
          </div>
          <div className="col-3">
        <button 
          type="button" 
          className="btn btn-dark w-100">Enter</button>
      </div>
    </div>
  </form>
  <CurrentWeatherInfo data={weatherData} /> 
  </div>
);

} else {
  search();
  return "Loading city.. 🌎"
}
  
}