import React from "react";

const WeatherForm = ({ city, setCity, country, setCountry, showWeather }) => {
  return (
    <form onSubmit={showWeather}>
      <input
        type="text"
        name="city"
        id="city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Madrid"
      />
      <input
        type="text"
        name="country"
        id="country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        placeholder="es"
      />
      <button onClick={showWeather}>Get Weather</button>
    </form>
  );
};

export default WeatherForm;
