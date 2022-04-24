import React from "react";
import "./App.css";

export const Time = ({ time }) => {
  return (
    <div>
      <span className="time-now">{time}</span>
    </div>
  );
};
