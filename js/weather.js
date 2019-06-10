/**
 * @ Author: Sitharaman Deepak Guptha
 * @ Description: Weather Scripts
 */
class Weather {
  constructor(city, country) {
    this.apikey = "";
    this.city = city;
    this.country = country;
  }

  // Fetch Weather from the API
  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${
        this.country
      }&appid=${this.apikey}&units=imperial`
    );

    const responseData = await response.json();

    // console.log(responseData);

    return responseData;
  }

  // Change the Weather Location
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}
