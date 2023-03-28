const convertToCelsius = function(faren) {
  return Math.round((faren-32)*(5.0/9.0)*10)/10;
};

const convertToFahrenheit = function(celci) {
  return Math.round((celci*(9.0/5.0)+32)*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
