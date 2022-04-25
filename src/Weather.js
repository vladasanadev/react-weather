import backgroundImage from "./img/download.jpeg";
import React from "react";
import { Time } from "./Time";
import { Forecast } from "./Forecast";

export const Weather = ({ inputcity, weather, forecast }) => {
  const setDate = () => {
    let current = new Date();
    let min =
      current.getMinutes() < 10
        ? `0${current.getMinutes()}`
        : `${current.getMinutes()}`;
    return `${current.getHours()}:${min}`;
  };
  return (
    <main style={{ backgroundImage: `url(${backgroundImage})` }}>
      <section className="weather-today">
        <div className="main-row">
          <img
            src="https://bmcdn.nl/assets/weather-icons/v2.1/fill/hail.svg"
            className="main-img"
            width="300"
            alt="weather-description"
          />
          <div>
            <Time time={setDate()} />
            <h1>{Math.round(weather?.main.temp)}°</h1>
            <h2 className="main-city">{inputcity}</h2>
            <p className="main-humidity">Humidity: {weather.main.humidity}%</p>
            <p className="main-humidity">Pressure: {weather.main.pressure}</p>
            <p className="main-humidity">Wind: {weather.wind.speed}HKm/hrs</p>
            <div className="button-container">
              <button>Today</button>
              <button>Tomorrow</button>
            </div>
          </div>
        </div>
      </section>
      <Forecast forecast={forecast} />
    </main>
  );
};
