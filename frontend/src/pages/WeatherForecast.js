import React, { useState } from 'react';
import './WeatherForecast.css';
import star from './astro_star.png';

const WeatherForecast = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [forecast, setForecast] = useState(null);

  const handleLatitudeChange = (event) => {
    setLatitude(event.target.value);
  };

  const handleLongitudeChange = (event) => {
    setLongitude(event.target.value);
  };

  const fetchWeatherData = async () => {
    try {
      // Step 1: Retrieve the metadata for the location
      const metadataResponse = await fetch(`https://api.weather.gov/points/${latitude},${longitude}`);
      const metadata = await metadataResponse.json();

      // Step 2: Get the forecast URL from the metadata
      const forecastUrl = metadata.properties.forecast;

      // Step 3: Retrieve the forecast data
      const forecastResponse = await fetch(forecastUrl);
      const forecastData = await forecastResponse.json();

      // Set the forecast data in state
      setForecast(forecastData);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleFetchWeather = () => {
    // Fetch weather data when the "Fetch Weather" button is clicked
    fetchWeatherData();
  };

  return (
    <div className="weather-title">
      <h1 className="weather-title">Sky Gazing</h1>

      <div className="image-star">
        <img src={star} className='star' />
        </div>

      <div className="input-container">
        <label className="label-input">
          Latitude:
          <input type="text" value={latitude} onChange={handleLatitudeChange} />
        </label>

        <label className="label-input">
          Longitude:
          <input type="text" value={longitude} onChange={handleLongitudeChange} />
        </label>

        <button className="button" onClick={handleFetchWeather}>
          Fetch Weather
        </button>
      </div>

      {forecast ?  (
        <div className="forecast-content">
          <div className="forecast-card">
            <h2>{forecast.properties.periods[0].name}</h2>
            <p className="weather-title">{forecast.properties.periods[0].detailedForecast}</p>
          </div>
        </div>
      ) : (
        <p className="instruction">Enter latitude and longitude to fetch the weather forecast.</p>
      )}
    </div>
  );
};



export default WeatherForecast;
