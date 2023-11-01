import getWeather from "./modules/weather";

const weatherBtn = document.getElementById('weather');

weatherBtn.addEventListener('click', () => {
  const search = document.getElementById('search').value;
  getWeather(search).then(console.log);
  console.log(search);
});