let locationField = document.getElementById("location-input");
locationField.onchange = (e) => {
  alert(locationField.value);
};

const fetchWeatherData = (location) => {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=f157c15ea898b6aa15d5c705663b54fc`,
    {
      mode: "cors",
    }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      let data = {
        temp: response.main.temp,
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

fetchWeatherData("Telsiai");
