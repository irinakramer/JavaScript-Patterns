// 238. Product of Array Except Self
// Medium

// https://leetcode.com/problems/product-of-array-except-self/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

/**
ans = answer array to store multiplied values, init to same length
 
first check for zeroes. If nums has more than one zero,
then all multiples will be zeros, and the returned array witll be [0, 0 ... 0]
iterate over nums to keep track or current element with i
inside each loop
do another loop to iterate over nums with j and take multiple of all elements
that are not equal to nums[i]
add the resulting multiple to answer array

return answer array
========

Time O(n^2)
Space O(n)

TODO: reduce time and space complexity to O(n) and O(1)  
*/

var productExceptSelf = function (nums) {
  let zeros = [];
  const answer = new Array(nums.length);

  zeros = nums.filter((el) => el === 0);

  if (zeros.length > 1) {
    answer.fill(0);

    return answer;
  }

  for (let i = 0; i < nums.length; i++) {
    let result = 1;

    for (let j = 0; j < nums.length; j++) {
      if (j !== i) result *= nums[j];
    }

    answer[i] = result;
  }

  return answer;
};

const nums = [1, 2, 3, 4]; // [24,12,8,6]
//const nums = [-1,1,0,-3,3];   // [0,0,9,0,0]
console.log(productExceptSelf(nums));