import axios from "axios";
import React, { useState } from "react";

export const TopForm = ({
  inputcity,
  setCity,
  setWeather,
  setLat,
  setLon,
  lon,
  lat,
  setForecast,
}) => {
  const APIKey = "80374f039ac77c49488d6b98bd64b1ff";
  const APIUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputcity}&appid=${APIKey}&units=metric`;

  const [inputCityValue, setInputCityValue] = useState("");
  const submitHandler = (e) => {};
  const inputChangeHAndler = (e) => {
    setInputCityValue(e.target.value);
  };
  const setWeeklyForecast = () => {
    const APIURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${APIKey}&units=metric`;
    axios.get(APIURL).then((res) => {
      setForecast(res.data.daily);
    });
  };
  const btnHandler = (e) => {
    setCity(inputCityValue);
    e.preventDefault();
    axios.get(APIUrl).then((res) => {
      setWeather(res.data);
      setLat(res.data.coord.lat);
      setLon(res.data.coord.lon);

      setWeeklyForecast();
    });
  };
  return (
    <header>
      <form onSubmit={submitHandler} className="form">
        <input
          onChange={inputChangeHAndler}
          autoFocus
          placeholder="Type City"
          className="header-select"
          type="text"
          value={inputCityValue}
        />
        <input
          onClick={btnHandler}
          value="Search"
          type="submit"
          className="header-btn"
        />
      </form>
    </header>
  );
};
