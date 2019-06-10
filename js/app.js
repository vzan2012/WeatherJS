/**
 * @ Author: Sitharaman Deepak Guptha
 * @ Description: App Scripts
 */

// Initiate the Storage
const storage = new Storage();
// Get the Weather Storage
const weatherLocation = storage.getLocationData();
//  Initiate the Weather Object
const weather = new Weather(weatherLocation.city, weatherLocation.country);
// Initiate the UI
const ui = new UI();

// Change Location - Function
// weather.changeLocation('Chennai', 'India');

// Clear Button - Function
document.querySelector("#btn-clear").addEventListener("click", () => {
  document.querySelector("#city").value = "";
  document.querySelector("#country").value = "";
});

// Change Location - Event
document.querySelector("#w-change-btn").addEventListener("click", e => {
  const city = document.querySelector("#city").value;
  const country = document.querySelector("#country").value;

  // console.log(city);
  // console.log(country);

  weather.changeLocation(city, country);

  // Store the location LS
  storage.setLocationData(city, country);

  // Get and display the Weather
  getWeather();

  // Hide the Modal
  $("#locModal").modal("hide");
});

// Getting the Weather to the DOM
document.addEventListener("DOMContentLoaded", getWeather);

function getWeather() {
  weather
    .getWeather()
    .then(data => ui.paint(data))
    .catch(err => console.log(err));
}

// getWeather();
