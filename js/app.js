/**
 * @ Author: Sitharaman Deepak Guptha
 * @ Description: App Scripts
 */

//  Initiate the Weather Object
const weather = new Weather("Paris", "France");

// Change Location - Function
// weather.changeLocation('Chennai', 'India');

function getWeather() {
  weather
    .getWeather()
    .then(data => console.log(data))
    .catch(err => console.log(err));
}
