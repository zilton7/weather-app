let locationField = document.getElementById("location");
locationField.onchange = (e) => {
  alert(locationField.value);
};

const img = document.querySelector("img");
fetch(
  "https://api.giphy.com/v1/gifs/translate?api_key=f157c15ea898b6aa15d5c705663b54fc&s=cats",
  {
    mode: "cors",
  }
)
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    img.src = response.data.images.original.url;
  });
