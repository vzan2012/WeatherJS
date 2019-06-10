/**
 * @ Author: Sitharaman Deepak Guptha
 * @ Description: UI Design Scripts
 */

class UI {
  constructor() {
    this.location = document.querySelector("#w-location");
    this.desc = document.querySelector("#w-desc");
    this.string = document.querySelector("#w-string");
    this.details = document.querySelector("#w-details");
    this.icon = document.querySelector("#w-icon");
    this.humidity = document.querySelector("#w-humidity");
    // this.feelsLike = document.querySelector("#w-feels-like");
    // this.dewpoint = document.querySelector("#w-dewpoint");
    this.wind = document.querySelector("#w-wind");
  }

  paint(weather) {
      console.log(weather);
    //   console.log(weather.name);
      this.location.textContent = weather.name+', '+weather.sys.country;
      this.desc.textContent = (weather.weather[0].description).charAt(0).toUpperCase()+(weather.weather[0].description).slice(1);
      this.string.innerHTML = weather.main.temp_max+' '+'&#8457;';
      this.icon.setAttribute('src',`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
      this.humidity.textContent = `Relative Humidity: ${weather.main.humidity} %`;
      this.wind.textContent = `Wind Speed: ${weather.wind.speed} miles/hour`
  }
}
