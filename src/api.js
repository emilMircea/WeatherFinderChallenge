const { REACT_APP_OPENWEATHERMAP_API_KEY } = process.env;

export const getWeather = async ({ city, country }) => {
  const config = {
    method: "GET",
  };
  return fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`,
    config
  ).then(async (response) => {
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
};
