import React, { Component } from "react";
import mostlycloudy from "./../img/weather-icons/mostlycloudy.svg";
import { render } from "react-dom";
import fakeWeatherData from "../fakeWeatherData.json";
import "./../App.css";

export default function  WeatherNow (props)
{
const {city,temp,temp_min,temp_max,humidity,pressure,description}=props.api;
  
  
    
    return (
      <main className="content">
            <div> 
            <img src={mostlycloudy} alt="mostlycloudy icon" />
            <div>
           {description}</div>
            </div>
            <div>
             <span><strong>Temperature </strong></span> 
           {temp_min} &#176;C to {temp_max}  &#176;C
            </div>
            <ul>
              <li><strong>Humidity </strong></li>
              <li> {humidity}%</li>
              <li><strong>Pressure</strong></li>
              <li> {pressure}%</li>
            </ul>
            
           </main>
    )
  }


