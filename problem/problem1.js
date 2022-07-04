/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  let final = [];
  for (let index = 0; index < nums.length; index++) {
    for (let j = index + 1; j < nums.length; j++) {
      const first = nums[index];
      const sec = nums[j];

      if (first + sec === target) {
        final.push(index);
        final.push(j);
      }
    }
  }

  return final;
};
