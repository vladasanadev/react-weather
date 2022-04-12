import React from "react";
import ReactDOM from "react-dom";
import backgroundImage from "./img/download.jpeg";

import "./App.css";

function App() {
  let weatherInfo = {
    city: "Kyiv, Ukraine",
    temperature: 10,
  };
  return (
    <div className="App">
      <body>
        <div className="wrapper">
          <header>
            <form>
              <input
                autofocus
                placeholder="Type City"
                className="header-select"
                type="text"
              />
              <input value="Search" type="submit" className="header-btn" />
            </form>
          </header>
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
                  <h1>{weatherInfo.temperature}°</h1>
                  <h2 className="main-city">{weatherInfo.city}</h2>
                  <div className="button-container">
                    <button>Today</button>
                    <button>Tomorrow</button>
                  </div>
                </div>
              </div>
            </section>

            <section className="main-week">
              <ul>
                <li>
                  <h5>Mon</h5>
                  <img
                    width="50"
                    src="https://bmcdn.nl/assets/weather-icons/v2.1/fill/clear-day.svg"
                    alt="Good Sunny Weather"
                  />
                  <small>16</small>
                </li>
                <li>
                  <h5>Tue</h5>
                  <img
                    width="50"
                    src="https://bmcdn.nl/assets/weather-icons/v2.1/fill/clear-day.svg"
                    alt="Good Sunny Weather"
                  />
                  <small>16</small>
                </li>
                <li>
                  <h5>Wed</h5>
                  <img
                    width="50"
                    src="https://bmcdn.nl/assets/weather-icons/v2.1/fill/clear-day.svg"
                    alt="Good Sunny Weather"
                  />
                  <small>16</small>
                </li>
                <li>
                  <h5>Thu</h5>
                  <img
                    width="50"
                    src="https://bmcdn.nl/assets/weather-icons/v2.1/fill/clear-day.svg"
                    alt="Good Sunny Weather"
                  />
                  <small>16</small>
                </li>
                <li>
                  <h5>Fri</h5>
                  <img
                    width="50"
                    src="https://bmcdn.nl/assets/weather-icons/v2.1/fill/clear-day.svg"
                    alt="Good Sunny Weather"
                  />
                  <small>16</small>
                </li>
              </ul>
            </section>
          </main>
        </div>
        <script src="./index.js"></script>
      </body>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
