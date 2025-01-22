const repeatString = function (string, num) {
  if (num < 0) return "ERROR";
  if (num === 0) return "";
  if (num === 1) return string;

  let stringResult = string;
  for (let i = 1; i < num; i++) {
    stringResult += string;
  }

  return stringResult;
};

// Do not edit below this line
module.exports = repeatString;
