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
import Error from './components/error.js'

const api_key="9dfe3fec4bb0d7bf9b062d31dc3022b3";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Nardine & Fatima Batesh"
    };
  }
  state={
    city:'London',
    icon:'',
    humidity:'',
    pressure:'',
    temp:0,
    temp_min:0,
    temp_max:0,
    description:'',
    status:false,
    error:false



  }

  getData= async (e)=>{
    e.preventDefault();
  
    const city=e.target.elements.city.value;
    
  const response= await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api_key}`);//return promis
   //we must to use await beacuse return a promise
  const data=await response.json();
  console.log(data);
  if(response.status == 200){
 this.setState({
   city:city,
  temp:Math.floor(data.list[1].main.temp-273.15),
  temp_min:Math.floor(data.list[1].main.temp_min-273.15),
  temp_max:Math.floor(data.list[1].main.temp_max-273.15),
  pressure:Math.floor(data.list[1].main.pressure-273.15),
  humidity:Math.floor(data.list[1].main.humidity-273.15),
  description:data.list[0].weather[0].description,
  status:true,
  error:false
 
   

 })

  
}
  else{
  this.setState({error:true})
  }
  }
  getIcon(id){
    if(id <= 300){
      return storm
    }if (id > 300 && id <= 499){
      return drizzle;
    }if(id >= 500 && id <= 599){
      return rain
    }if(id >= 600 && id <= 699){
      return snow
    }if(id == 800){
      return clear
    }if(id <= 801 && id <= 805){
      return mostlycloudy
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
        <Search className="header" handleInput={this.handleInputChange} getData={this.getData}/>
        {this.state.error?<Error />:''}
            <WeatherNow data={data} getIcon={this.getIcon} api={this.state}/>
            <HoursWeather data={data} 
          
            getIcon={this.getIcon}
            />
      </div>
    );
  }
}

export default App;
