import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import backgroundImage from "./img/download.jpeg";
import { TopForm } from "./TopForm";
import { Weather } from "./Weather";
import "./App.css";
import axios from "axios";

function App() {
  const [inputcity, setCity] = useState("");

  const [weather, setWeather] = useState({
    main: { temp: 18, pressure: 22, humidity: 10 },
    wind: {
      speed: "22",
    },
  });
  const [forecast, setForecast] = useState([]);
  const [lon, setLon] = useState("");
  const [lat, setLat] = useState("");

  const setPosition = () => {};

  const getCurrentForecast = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude);
      const long = Math.round(position.coords.latitude);
      const lati = Math.round(position.coords.longitude);
      const APIKey = "80374f039ac77c49488d6b98bd64b1ff";
      console.log(lati, long);
      let APICurrent = `https://api.openweathermap.org/data/2.5/onecall?lat=${lati}&lon=${long}&appid=${APIKey}&units=metric`;
      axios.get(APICurrent).then((res) => {
        console.log("Curr position First Forecast in index js");
        console.log(res.data, "Curr position First Forecast in index js");
        setForecast(res.data.daily);
      });
    });
  };
  useEffect(() => {
    console.log("useef in js");
    getCurrentForecast();
  }, []);

  return (
    <div className="App">
      <body>
        <div className="wrapper">
          <TopForm
            setLon={setLon}
            setLat={setLat}
            lon={lon}
            lat={lat}
            inputcity={inputcity}
            setCity={setCity}
            setWeather={setWeather}
            setForecast={setForecast}
          />
          <Weather
            lat={lat}
            lon={lon}
            inputcity={inputcity}
            weather={weather}
            forecast={forecast}
          />
          <h4 className="footer-link">
            <a
              className="footer-link"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/vladasanadev/react-weather"
            >
              Open source code
            </a>
          </h4>
        </div>
        <script src="./index.js"></script>
      </body>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
