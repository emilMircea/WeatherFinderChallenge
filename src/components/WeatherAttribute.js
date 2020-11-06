import React from "react";

const WeatherAttribute = ({ title, attribute }) => {
  return (
    <div>
      <p className="weather__key">
        {title}:<span className="weather__value"> {attribute}</span>
      </p>
    </div>
  );
};

export default WeatherAttribute;
