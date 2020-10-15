import React, { Component } from "react";
import Search from "./components/Search";
import HoursWeather from "./components/24HoursWeather";
import WeatherNow from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";
import clear from "./img/weather-icons/clear.svg";
import cloudy from "./img/weather-icons/cloudy.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import fog from "./img/weather-icons/fog.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";
import rain from "./img/weather-icons/rain.svg";
import snow from "./img/weather-icons/snow.svg";
import storm from "./img/weather-icons/storm.svg";
import unknown from "./img/weather-icons/unknown.svg";
import api_data from "./fakeWeatherData.json";
const api_key="9dfe3fec4bb0d7bf9b062d31dc3022b3";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Nardine & Fatima Batesh"
    };
  }
  state={
    temperature:"",
    city:"",
    humidity:"",
    pressure:"",
    icon:"",
    description:"",
    error:""

  }
  getweather= async (e)=>{
    const city =e.target.elements.value;
    e.preventDefault();
    const api_call= await fetch('api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${api_key}');
    const response=await api_call.json();
    if(city){
      this.setState({
        temperature:response.main.temp,
        city:response.name,
        humidity:response.main.humidity,
        icon:response.weather[0].icon,
        description:response.weather[0].description,
        error:""

      })
    }else{
      this.setState({
        error:"please fill out input fields..."
      })
    }
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    var  data = fakeWeatherData.list.slice(5,12).map(item => {
      return item
  })
    return (
      <div className="app">
        <Search className="header" handleInput={this.handleInputChange} load_weather={this.getweather} />
            <WeatherNow data={data} />
            <HoursWeather data={data} 
            city={this.state.city}
            temperature={this.state.temperature}
            humidity={this.state.humidity}
            pressure={this.state.pressure}
            icon={this.state.icon}
            description={this.state.description}
            error={this.state.error}

            />
      </div>
    );
  }
}

export default App;
