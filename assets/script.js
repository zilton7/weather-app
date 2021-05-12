let locationField = document.getElementById("location-input");
locationField.onchange = () => {
  let locationField = document.getElementById("location-input").value;
  let unitSelection = document.querySelector('input[name="unit"]:checked')
    .value;
  fetchWeatherData(locationField, unitSelection);
};

let unitsFieldset = document.getElementById("units");
unitsFieldset.onchange = () => {
  let locationField = document.getElementById("location-input").value;
  let unitSelection = document.querySelector('input[name="unit"]:checked')
    .value;
  if (locationField !== "") {
    fetchWeatherData(locationField, unitSelection);
  }
};

const fetchWeatherData = (location = "Vilnius", units = "metric") => {
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&APPID=f157c15ea898b6aa15d5c705663b54fc`;
  console.log(url);
  fetch(url, {
    mode: "cors",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
      let symbol = units == "metric" ? " °C" : " °F";
      let data = {
        temp: Math.round(response.main.temp) + symbol,
        location: location,
      };
      insertData(data);
    });
};

const insertData = (data) => {
  let tempDiv = document.getElementById("temp");
  tempDiv.innerHTML = "It's " + data.temp;
  let locationDiv = document.getElementById("location");
  locationDiv.innerHTML = "in " + data.location;
};

fetchWeatherData();
