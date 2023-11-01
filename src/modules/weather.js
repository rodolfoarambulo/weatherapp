async function getWeather(userLocation) {
  const location = userLocation;
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=2aa35394a1b649169f1102647232310&q=${location}&aqi=no`,
      { mode: "cors" }
    );
    if (response.status === 400) {
      throw new Error("No matching location.");
    } else {
      const weatherData = await response.json();
      return parseWeather(weatherData);
    }
  } catch (e) {
    console.log(e);
  }
}

function parseWeather(weatherData) {
  const weather = {
    name: weatherData.location.name,
    country: weatherData.location.country,
    temp: weatherData.current.temp_c,
    condition:  weatherData.current.condition.text,
    wind: weatherData.current.wind_kph,
  };

  return weather;
}

export default getWeather;