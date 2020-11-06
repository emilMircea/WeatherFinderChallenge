import React, { useState } from "react";
import { useMutation, useQueryCache } from "react-query";
import WeatherDisplay from "./components/WeatherDisplay";
import WeatherForm from "./components/WeatherForm";
import WeatherFinderTitle from "./components/WeatherFinderTitle";
import { getWeather } from "./api";
import "./App.css";

const App = () => {
  const [city, setCity] = useState("Madrid");
  const [country, setCountry] = useState("es");

  const queryCache = useQueryCache();

  const [
    mutate,
    { isIdle, isLoading, isError, isSuccess, data, error },
  ] = useMutation(getWeather, {
    onSuccess: () => queryCache.invalidateQueries("weather"),
  });

  const showWeather = async (e) => {
    e.preventDefault();

    try {
      await mutate({ city, country });
      // Todo was successfully created

      setCity("");
      setCountry("");
    } catch (error) {
      return new Error(error);
    }
  };

  return (
    <div>
      <div className="wrapper">
        <div className="main">
          <div className="container-fluid">
            <div className="row">
              <WeatherFinderTitle />
              <div className="col-7 form-container">
                <WeatherForm
                  isIdle={isIdle}
                  isLoading={isLoading}
                  isError={isError}
                  isSuccess={isSuccess}
                  data={data}
                  error={error}
                  showWeather={showWeather}
                />
                {data && <WeatherDisplay data={data} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
