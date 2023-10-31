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
      parseWeather(weatherData);
    }
  } catch (e) {
    console.log(e);
  }
}

function parseWeather(weatherData) {
  console.log(`${weatherData.location.name}, ${weatherData.location.country}`);
  console.log(`${weatherData.current.temp_c}°C, ${weatherData.current.condition.text}`);
  console.log(`Wind: ${weatherData.current.wind_kph} km/h`);
}

export default getWeather;