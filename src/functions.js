import { insertData, changeAppearance } from "./dom-manipulation";

const runApp = () => {
  /* eslint-disable no-use-before-define */
  const fetchWeatherData = (location = "Vilnius", units = "metric") => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&APPID=f157c15ea898b6aa15d5c705663b54fc`;

    async function getData() {
      const response = await fetch(url, { mode: "cors" });
      const weatherData = await response.json();
      const symbol = units === "metric" ? " °C" : " °F";
      const data = {
        temp: Math.round(weatherData.main.temp) + symbol,
        location,
      };
      insertData(data);
      changeAppearance(weatherData.main.temp, units);
    }
    getData();
  };
  /* eslint-enable no-use-before-define */

  const locationField = document.getElementById("location-input");
  locationField.onchange = () => {
    const locationField = document.getElementById("location-input").value;
    const unitSelection = document.querySelector('input[name="unit"]:checked')
      .value;
    fetchWeatherData(locationField, unitSelection);
  };

  const unitsFieldset = document.getElementById("units");
  unitsFieldset.onchange = () => {
    const locationField = document.getElementById("location-input").value;
    const unitSelection = document.querySelector('input[name="unit"]:checked')
      .value;
    if (locationField !== "") {
      fetchWeatherData(locationField, unitSelection);
    }
  };

  fetchWeatherData();
};
export default runApp;
