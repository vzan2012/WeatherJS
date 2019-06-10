/**
 * @ Author: Sitharaman Deepak Guptha
 * @ Description: App Scripts
 */

//  Initiate the Weather Object
const weather = new Weather("Paris", "France");
const ui = new UI();

// Change Location - Function
// weather.changeLocation('Chennai', 'India');

function getWeather() {
  weather
    .getWeather()
    .then(data => ui.paint(data))
    .catch(err => console.log(err));
}

getWeather();