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
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      )
      if (!response.ok) {
        throw new Error('Api not working')
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
    <div>
      <form onSubmit={handle}>
        <input value={city} onChange={(e) => setCity(e.target.value)} />
        <button type='submit'>See Weather</button>
      </form>
      {loading ? (
        <div>
          <img
            src={
              'https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif'
            }
            alt='Loading'
          />
        </div>
      ) : weather ? (
        <>
          <h2>Weather in {weather.name}</h2>
          <p>Temperature: {Math.round(weather.main.temp - 273.15)}°C</p>
          <p>Temperature max: {Math.round(weather.main.temp_max - 273.15)}°C</p>
          <p>Temperature min: {Math.round(weather.main.temp_min - 273.15)}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Feels Like: {Math.round(weather.main.feels_like - 273.15)}°C</p>
          <p>Weather: {weather.weather[0].main}</p>
          <p>Description: {weather.weather[0].description}</p>
        </>
      ) : (
        <p>No weather data available.</p>
      )}
    </div>
  )
}

export default App
