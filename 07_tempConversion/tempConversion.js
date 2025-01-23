const convertToCelsius = function (num) {
  return Number(((5 / 9) * (num - 32)).toFixed(1));
};

const convertToFahrenheit = function (num) {
  return Number((1.8 * num + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
