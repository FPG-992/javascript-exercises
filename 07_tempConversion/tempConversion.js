const convertToCelsius = function(temperatureInCelsius) {
  return Math.round((((temperatureInCelsius-32)*5/9)*10))/10;
}

const convertToFahrenheit = function(temperatureInFahrenheit) {
 return Math.round((((temperatureInFahrenheit*9/5)+32)*10))/10;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
