/* eslint-disable import/no-cycle, import/no-cycle, import/prefer-default-export */
import { insertData, changeAppearance } from './dom-manipulation';

const fetchWeatherData = (location = 'Vilnius', units = 'metric') => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&APPID=f157c15ea898b6aa15d5c705663b54fc`;

  async function getData() {
    const response = await fetch(url, { mode: 'cors' });
    const weatherData = await response.json();
    const symbol = units === 'metric' ? ' °C' : ' °F';
    const data = {
      temp: Math.round(weatherData.main.temp) + symbol,
      location,
    };
    insertData(data);
    changeAppearance(weatherData.main.temp, units);
  }
  getData();
};

fetchWeatherData();

export { fetchWeatherData };
/* eslint-enable import/no-cycle, import/no-cycle, import/prefer-default-export */
