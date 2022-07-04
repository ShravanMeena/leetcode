// 14. Longest Common Prefix

var longestCommonPrefix = function (strs) {
  let prefix = strs[0];

  if (strs.length == 0) {
    return "";
  }
  for (let index = 0; index < strs.length; index++) {
    while (strs[index].indexOf(prefix) !== 0) {
      prefix = prefix.substr(0, prefix.length - 1);
    }
  }

  return prefix;
};

let strs = ["flower", "flow", "flight"];

console.log(longestCommonPrefix(strs));
