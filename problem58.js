console.log("problem58");

// 58. Length of Last Word

var lengthOfLastWord = function (s) {
  if (s.length === 0) return 0;

  let array = s.trim().split(" ");
  let lastWordLength = array[array.length - 1].length;
  return lastWordLength;
};

const s = "Hello World";
//  "   fly me   to   the moon  "

console.log(lengthOfLastWord(s));
