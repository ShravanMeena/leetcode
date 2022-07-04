console.log("problem26");

// 26. Remove Duplicates from Sorted Array

/**
 * @param {number[]} nums
 * @return {number}
 */
const nums = [1, 1, 2, 2, 2, 3, 4, 5, 5, 6, 6, 7, 7, 8, 8];

var removeDuplicates = function (nums) {
  let index = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[index] = nums[i + 1];
      index++;
    }
  }
  return { iniqueNums: index, finalArray: nums };
};

// var removeDuplicates = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = nums.length; j >= i + 1; j--) {
//       if (nums[j] == nums[i]) {
//         nums.splice(i, 1);
//       }
//     }
//   }
//   return nums;
// };

console.log(removeDuplicates(nums));

// O(n) timecomplexity:: LINEAR ALGORITHM
