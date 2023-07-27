import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [weather, setWeather] = useState({})
  const [loading, setLoading] = useState(true)
  const [city, setCity] = useState('NEW YORK')
  const apiKey = 'a57c54dba1fb8cf8c2dc9b9548bdcad5'

  const handle = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast/hourly?q=${city}&appid=${apiKey}`
      )

      if (response.status === 404) {
        alert('Enter valid name')
        setLoading(false)
        setCity('New Delhi')
        const fallbackCity = 'New Delhi'
        const fallbackResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${fallbackCity}&appid=${apiKey}`
        )
        const data = await fallbackResponse.json()
        setWeather(data)
        return
      }
      const data = await response.json()
      setWeather(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  return (
    <div className='container'>
      <form onSubmit={handle}>
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder='Enter city name'
        />
        <button type='submit'>See Weather</button>
      </form>
      {loading ? (
        <div className='loading'>Loading...</div>
      ) : weather.name ? (
        <div className='weather-info'>
          <h1>Weather in {weather.name}</h1>
          <h2>{Math.round(weather.main.temp - 273.15)}°C</h2>
          <p>
            <span className='small-text'>
              Temperature Varies from{' '}
              {Math.round(weather.main.temp_min - 273.15)}°C to{' '}
              {Math.round(weather.main.temp_max - 273.15)}°C
            </span>
          </p>
          <p>Feels Like: {Math.round(weather.main.feels_like - 273.15)}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Weather: {weather.weather[0].main}</p>
          <p>Description: {weather.weather[0].description}</p>
        </div>
      ) : (
        <p className='weather-info'>No weather data available.</p>
      )}
    </div>
  )
}

export default App
