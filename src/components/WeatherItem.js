import React, { Component } from "react";
import mostlycloudy from "./../img/weather-icons/mostlycloudy.svg";
import { render } from "react-dom";
import fakeWeatherData from "../fakeWeatherData.json";
import "./../App.css";

export class WeatherNow extends Component {

  render() 
  {
    
    return (
      <main className="content">
            <div> 
            <img src={mostlycloudy} alt="mostlycloudy icon" />
            </div>
            <div>
             <span><strong>Temperature</strong></span> { Math.round(fakeWeatherData.list[0].main.temp_min)} &#176;C to  { Math.round(fakeWeatherData.list[0].main.temp_max)} &#176;C
            </div>
            <ul>
              <li><strong>Humidity </strong></li>
              <li> {fakeWeatherData.list[0].main.humidity}%</li>
              <li><strong>Pressure</strong></li>
              <li> {fakeWeatherData.list[0].main.pressure}%</li>
            </ul>
           </main>
    );
  }
}
export default WeatherNow;

