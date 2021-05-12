const runApp = () => {
  const insertData = (data) => {
    const tempDiv = document.getElementById('temp');
    tempDiv.innerHTML = `It's ${data.temp}`;
    const locationDiv = document.getElementById('location');
    locationDiv.innerHTML = `in ${data.location}`;
  };
  /* eslint-disable no-use-before-define */
  const fetchWeatherData = (location = 'Vilnius', units = 'metric') => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&APPID=f157c15ea898b6aa15d5c705663b54fc`;
    fetch(url, {
      mode: 'cors',
    })
      .then((response) => response.json())
      .then((response) => {
        const symbol = units === 'metric' ? ' °C' : ' °F';
        const data = {
          temp: Math.round(response.main.temp) + symbol,
          location,
        };
        insertData(data);
        changeAppearance(response.main.temp, units);
      });
  };
  /* eslint-enable no-use-before-define */

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

  fetchWeatherData();
};
export default runApp;
