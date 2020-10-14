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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Nardine"
    };
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
        <Search className="header" handleInput={this.handleInputChange} />
            <WeatherNow data={data}/>
            <HoursWeather data={data}/>
      </div>
    );
  }
}

export default App;
