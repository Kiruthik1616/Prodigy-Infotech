import React, {  useState } from 'react';
import axios from 'axios';
import {
  WiCloud, WiDaySunny, WiRain, WiSnow, WiThunderstorm, WiFog, WiStrongWind
} from 'react-icons/wi';
import './Weather.css'; // Import the CSS file

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [suggestions, setSuggestions] = useState([]); // State to store city suggestions

  const fetchWeatherData = async (cityName) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=96f54330be1e84cf6ae49ad66f240380`
      );
      setWeatherData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCitySuggestions = async (input) => {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=5&appid=96f54330be1e84cf6ae49ad66f240380`
      );
      setSuggestions(response.data);
    } catch (error) {
      console.error(error);     
    }
  };

  const handleInputChange = (e) => {
    const input = e.target.value;
    setCity(input);
    if (input.length > 2) {
      fetchCitySuggestions(input);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (cityName) => {
    setCity(cityName);
    setSuggestions([]);
    fetchWeatherData(cityName);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData(city);
  };

  const getWeatherIcon = (main) => {
    switch (main) {
      case 'Clouds':
        return <><WiCloud size={50} /><br/><span>-- Cloudy --</span></>;
      case 'Clear':
        return <><WiDaySunny size={50} /><br/><span>-- Clear Sky --</span></>;
      case 'Rain':
        return <><WiRain size={50} /><br/><span>-- Rainy --</span></>;
      case 'Snow':
        return <><WiSnow size={50} /><br/><span>-- Snowy --</span></>;
      case 'Thunderstorm':
        return <><WiThunderstorm size={50} /><br/><span>-- Thunderstorm --</span></>;
      case 'Fog':
        return <><WiFog size={50} /><br/><span>-- Foggy --</span></>;
      default:
        return <><WiStrongWind size={50} /><br/><span>-- Windy --</span></>;
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={handleInputChange}
          className="input"
        />
        <button type="submit" className="button">Get Weather</button>
      </form>
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion.name)} className="suggestion-item">
              {suggestion.name}, {suggestion.country}
            </li>
          ))}
        </ul>
      )}
      <br/>
      {weatherData ? (
        <div className="weather-card">
          <div className="weather-info">
            <h2><u>{weatherData.name}</u></h2>
            <div className="weather-icon">
              {getWeatherIcon(weatherData.weather[0].main)}
            </div>
            <br/>
            <p><b>Temperature:  </b><i>{weatherData.main.temp}°C</i></p>
            <p><b>Description:  </b><i>{weatherData.weather[0].description}</i></p>
            <p><b>Feels like:  </b> <i>{weatherData.main.feels_like}°C</i></p>
            <p><b>Humidity:  </b><i>{weatherData.main.humidity}%</i></p>
            <p><b>Pressure:  </b><i>{weatherData.main.pressure} hPa</i></p>
            <p><b>Wind Speed:  </b><i>{weatherData.wind.speed} m/s</i></p>
          </div>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default Weather;