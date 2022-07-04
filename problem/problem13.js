// ROMAN NUMBER TO INTEGER
function romanToInt(s) {
  if (s == null) return -1;
  var num = char_to_int(s.charAt(0));
  var pre, curr;

  for (var i = 1; i < s.length; i++) {
    curr = char_to_int(s.charAt(i));

    console.log(curr, "curr");
    pre = char_to_int(s.charAt(i - 1));

    console.log(pre, "pre");

    if (curr <= pre) {
      num += curr;
    } else {
      num = num - pre * 2 + curr;
    }
  }
  return num;
}

function char_to_int(c) {
  switch (c) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
    default:
      return -1;
  }
}

// console.log(romanToInt("XXVI"));
// console.log(roman_to_Int("MMMDXCIX"));
// console.log(roman_to_Int("IC"));
// console.log(roman_to_Int("IX"));
// console.log(roman_to_Int("XI"));

// function romanToIntNum(c) {
//   switch (c) {
//     case "I":
//       return 1;
//     case "V":
//       return 5;
//     case "X":
//       return 10;
//     case "L":
//       return 50;
//     case "C":
//       return 100;
//     case "D":
//       return 500;
//     case "M":
//       return 1000;
//     default:
//       return -1;
//   }
// }

// function romanToInt(str) {
//   let num = romanToIntNum(str.charAt(0));
//   var next, curr;

//   for (let index = 0; index < str.length; index++) {
//     curr = romanToIntNum(str.charAt(index));
//     next = romanToIntNum(str.charAt(index + 1));

//     if (next <= curr) {
//       num = num + curr;
//     } else {
//       console.log(next, "LODUUUU");
//       num = num + romanToIntNum(next);
//     }
//   }

//   console.log(num, "ADDDDD");
// }

// console.log(romanToInt("IV"));
