// 9. Palindrome Number

// METHOD::1
// var isPalindrome = function (x) {
//   const simpleArr = Array.from(String(x), Number);
//   const reverseArr = Array.from(String(x), Number)?.reverse();
//   Array.prototype.equals = function (arr) {
//     return (
//       this.length === arr.length &&
//       this.every((value, index) => value === arr[index])
//     );
//   };

//   return simpleArr.equals(reverseArr);
// };

// console.log(isPalindrome(112211));

// METHOD::2

var isPalindrome = function (x) {
  function reverseNum(n) {
    let r = n.toString().split("").reverse().join("");
    return Math.sign(n) * parseInt(r);
  }

  const simpleA = x;
  const reverseA = reverseNum(x);

  if (simpleA === reverseA) {
    return true;
  }
  return false;
};

console.log(isPalindrome(121));
