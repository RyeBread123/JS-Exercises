const removeFromArray = function (arr, ...args) {
  let result = [];

  for (let item of arr) {
    if (!args.includes(item)) {
      result.push(item);
    }
  }

  return result;
};

// const removeFromArray = (arr, ...args) => {
//   return arr.filter((item) => !args.includes(item));
// };

// Do not edit below this line
module.exports = removeFromArray;
