import React from "react";
import "./App.css";

export const Forecast = ({ forecast = undefined }) => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  return (
    <section className="main-week">
      <ul>
        {forecast?.map((el, i) => {
          if (i < 4) {
            return (
              <li key={i}>
                <h5>{days[i]}</h5>
                <img
                  width="50"
                  src={`http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`}
                  alt={`el.weather[0].description`}
                />
                <small>{Math.round(el.temp.day)}C</small>
              </li>
            );
          }
          return undefined;
        })}
      </ul>
    </section>
  );
};
