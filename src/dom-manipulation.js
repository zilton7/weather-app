/* eslint-disable import/no-cycle */
import { fetchWeatherData } from './functions';
/* eslint-enable import/no-cycle */

const insertData = (data) => {
  const tempDiv = document.getElementById('temp');
  tempDiv.innerHTML = `It's ${data.temp}`;
  const locationDiv = document.getElementById('location');
  locationDiv.innerHTML = `in ${data.location}`;
};

const changeTextColor = (color) => {
  document.getElementById('temp').style.color = color;
};

const changeAppearance = (temp, units) => {
  if (units === 'metric') {
    if (temp < 10) {
      changeTextColor('blue');
    } else if (temp >= 10 && temp < 15) {
      changeTextColor('yellow');
    } else {
      changeTextColor('red');
    }
  } else if (temp < 50) {
    changeTextColor('blue');
  } else if (temp >= 50 && temp < 59) {
    changeTextColor('yellow');
  } else {
    changeTextColor('red');
  }
};

const locationField = document.getElementById('location-input');
locationField.onchange = () => {
  const locationField = document.getElementById('location-input').value;
  const unitSelection = document.querySelector('input[name="unit"]:checked')
    .value;
  fetchWeatherData(locationField, unitSelection);
};

const unitsFieldset = document.getElementById('units');
unitsFieldset.onchange = () => {
  const locationField = document.getElementById('location-input').value;
  const unitSelection = document.querySelector('input[name="unit"]:checked')
    .value;
  if (locationField !== '') {
    fetchWeatherData(locationField, unitSelection);
  }
};

export { insertData, changeAppearance };
