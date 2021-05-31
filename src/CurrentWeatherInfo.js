import React from "react";
import CurrentDate from "./CurrentDate";
import WeatherIcon from "./WeatherIcon";
import WeatherUnit from "./WeatherUnit";



export default function CurrentWeatherInfo(props) {
    return(
      <div className="CurrentWeatherInfo">
       <h1><i className="fas fa-map-marker-alt"></i> {props.data.city}</h1>
        <CurrentDate date={props.data.date}/>
          <p className="text-capitalize"><strong>{props.data.description}</strong></p>
            <div className="row mt-5">
              <div className="col-7">
                <div className="d-flex flex-row">
                  <div className="p-2">
                  <WeatherIcon 
                    code={props.data.icon} 
                    alt={props.data.description}
                    size={64}
                  />
                </div>
                <div className="p-2">
              <WeatherUnit celsius={props.data.temperature}/>
              </div>
            </div>
            </div>
          <div className="col-5">
        <ul>
        <li><i className="fas fa-temperature-high"></i> Max temp: {Math.round(props.data.maxTemperature)} °C </li>
        <li><i className="fas fa-temperature-low"></i> Min temp: {Math.round(props.data.minTemperature)} °C </li>
        <li><i className="fas fa-tint"></i> Humidity: {props.data.humidity} % </li>
        <li><i className="fas fa-wind"></i> Wind: {Math.round(props.data.wind)} m/s </li>
      </ul>
    </div>
    </div>
  </div>  
    ); 
}