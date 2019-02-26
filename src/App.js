import React, { Component } from 'react';
import '../src/App.sass';
import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'
import Time from './components/Time'

//import axios from 'axios';






const Api_Key = 'c4bd3a16df00f0ae333304baf0a62d4e'
//const URL = 'https://samples.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=b6907d289e10d714a6e88b30761fae22';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      city: undefined,
      country: undefined,
      temp: undefined,
      humidity: undefined,
      description: undefined,
      icon: undefined,
      error: '',
      //isLoading: false
    }
  }

  handleOnChange = (e) => {
    this.setState({
      city: this.state.city,
      country: ''
    })
  } 
 

  // Then use it before your routes are set up:
  componentDidMount() {
    this.getWeather()
  }
  
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&mode=json&units=metric&appid=${Api_Key}`);
    
    const response = await api_call.json();
    console.log(response)
    console.log(response.name)
    console.log(response.weather[0].description)
    
    if(city && country) {
    this.setState({
      city: response.name,
      country: response.sys.country,
      humidity: response.main.humidity,
      temp: Math.round(response.main.temp),
      description: response.weather[0].description,
      icon: response.weather[0].icon,
      error: '',
      //isLoading: !this.state.isLoading
    })

    }else {
      this.setState({
        error: 'City or Country did not entered',
        isLoading: this.state.isLoading
      })
    }

  }
  
  

  render() {
    
    return (
      <div className="App">
        <Titles />
        <Time />
        <Form 
          submit={this.getWeather} 
          change={this.handleOnChange}
          //style={this.state.style}
          
        />

        <Weather
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          temp={this.state.temp}
          description={this.state.description}
          icon={this.state.icon}
          //style={{display: isLoading ? 'flex' : 'none'}}
        />
        <p>{this.state.error}</p>

      </div>
    );
  }
}

export default App;
