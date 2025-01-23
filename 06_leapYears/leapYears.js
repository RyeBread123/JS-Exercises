const leapYears = function (year) {
  // return false if the year is not divisble by 4
  if (year % 4 !== 0 || (year % 100 === 0 && year % 400 !== 0)) return false;

  return true;
};
// Do not edit below this line
module.exports = leapYears;
