const insertData = (data) => {
  const tempDiv = document.getElementById("temp");
  tempDiv.innerHTML = `It's ${data.temp}`;
  const locationDiv = document.getElementById("location");
  locationDiv.innerHTML = `in ${data.location}`;
};

const changeAppearance = (temp, units) => {
  if (units === "metric") {
    if (temp < 10) {
      changeTextColor("blue");
    } else if (temp >= 10 && temp < 15) {
      changeTextColor("yellow");
    } else {
      changeTextColor("red");
    }
  } else if (temp < 50) {
    changeTextColor("blue");
  } else if (temp >= 50 && temp < 59) {
    changeTextColor("yellow");
  } else {
    changeTextColor("red");
  }
};

const changeTextColor = (color) => {
  document.getElementById("temp").style.color = color;
};

export { insertData, changeAppearance };
