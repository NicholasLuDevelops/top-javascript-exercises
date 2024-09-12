const convertToCelsius = function (temperature) {
  let convertedTemp = (temperature - 32) * (5 / 9);
  convertedTemp = Number(convertedTemp.toFixed(1));
  return convertedTemp;
};

const convertToFahrenheit = function (temperature) {
  let convertedTemp = temperature * (9 / 5) + 32;
  convertedTemp = Number(convertedTemp.toFixed(1));
  return convertedTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
