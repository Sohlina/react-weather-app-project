import React from "react";
import "./Weather.css"

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
        <input 
          type="search" 
          placeholder="Enter a city.." 
          className="form-control" />
          </div>
          <div className="col-3">
        <button type="button" className="btn btn-dark">Enter</button>
      </div>
      </div>
      </form>
      <h2>Queenstown</h2>
       Monday ⎜ May 22 ⎜ 11:30
      <div className="row">
        <div className="col-6">
         <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="Sunny" />
          2°C
        </div>
        <div className="col-6">
         <ul>
           <li>Humidity: 92% </li>
           <li>Wind: 1 m/s </li>
           <li>Feels like: 1°</li>
         </ul>
        </div>
        </div>
      </div>  
      );
}