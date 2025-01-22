// const reverseString = function (string) {
//   let reverseStrArr = [];
//   for (let i = string.length - 1; i >= 0; i--) {
//     reverseStrArr.push(string[i]);
//   }

//   return reverseStrArr.join("");
// };

const reverseString = function (string) {
  let strArr = string.split("");
  let left = 0;
  let right = strArr.length - 1;

  while (left < right) {
    // Swap characters
    let temp = strArr[left];
    strArr[left] = strArr[right];
    strArr[right] = temp;

    left++;
    right--;
  }

  return strArr.join("");
};

// Do not edit below this line
module.exports = reverseString;
