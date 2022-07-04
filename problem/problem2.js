// 2. Add Two Numbers

function reverse(array) {
  var output = [];
  while (array.length) {
    output.push(array.pop());
  }
  return output;
}

var addTwoNumbers = function (l1, l2) {
  let l1Reverse = reverse(l1);
  let l2Reverse = reverse(l2);

  let a = "";
  let b = "";

  for (let index = 0; index < l1Reverse.length; index++) {
    const elementL1 = l1Reverse[index];
    a = a + elementL1.toString();
  }

  for (let index = 0; index < l2Reverse.length; index++) {
    const elementL2 = l2Reverse[index];
    b = b + elementL2.toString();
  }

  let numToSeparate = parseInt(a) + parseInt(b);

  const arrayOfDigits = Array.from(String(numToSeparate), Number);
  return reverse(arrayOfDigits);
};

let l1 = [2, 4, 3];
let l2 = [5, 6, 4];
console.log(addTwoNumbers(l1, l2));
