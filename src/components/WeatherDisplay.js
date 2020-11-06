import React from "react";
import WeatherAttribute from "./WeatherAttribute";

const WeatherDisplay = ({ data }) => {
  const { city, country, temperature, humidity, description, error } = data;
  return (
    <div className="weather__info">
      {city && <WeatherAttribute title={"City"} attribute={city} />}
      {country && <WeatherAttribute title={"country"} attribute={country} />}
      {temperature && (
        <WeatherAttribute title={"temperature"} attribute={temperature} />
      )}
      {humidity && <WeatherAttribute title={"humidity"} attribute={humidity} />}
      {description && (
        <WeatherAttribute title={"description"} attribute={description} />
      )}
      {error && <p className="weather__error">{error}</p>}
    </div>
  );
};

export default WeatherDisplay;
