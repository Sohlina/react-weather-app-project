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
      <p>Sunny</p>
       Monday ⎜ May 22 ⎜ 11:30
      <div className="row mt-5">
        <div className="col-6">
          <div className="clearfix">
             <img 
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" 
              alt="Sunny"
              className="float-left"
            />
              <span className="temperature">2</span>
              <span className="unit">°C</span>
           
          </div>
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