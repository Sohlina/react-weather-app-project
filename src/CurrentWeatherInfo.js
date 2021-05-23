import React from "react";
import CurrentDate from "./CurrentDate";

export default function CurrentWeatherInfo(props) {
    return(
      <div className="CurrentWeatherInfo">
        <h1>{props.data.city}</h1>
    <CurrentDate date={props.data.date}/>
      <p className="text-capitalize">{props.data.description}</p>
        <div className="row mt-5">
          <div className="col-6">
            <div className="clearfix">
              <img 
                src={props.data.weatherIcon} 
                alt={props.data.description}
                className="float-left"
              />
              <span className="temperature">{Math.round(props.data.temperature)}</span>
              <span className="unit">°C</span> 
          </div>
        </div>
    <div className="col-6">
      <ul>
        <li>Max temp: {Math.round(props.data.maxTemperature)}°C </li>
        <li>Min temp: {Math.round(props.data.minTemperature)}°C </li>
        <li>Humidity: {props.data.humidity}% </li>
        <li>Wind: {Math.round(props.data.wind)} m/s </li>
      </ul>
    </div>
    </div>
  </div>  
    ); 
}