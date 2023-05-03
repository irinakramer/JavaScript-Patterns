// 1. Two Sum
// https://leetcode.com/problems/two-sum/description/

/* 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

const nums = [2, 7, 11, 15]
const target = 9

const twoSum = (nums, target) => {
   const myMap = new Map();

    for (let i = 0; i < nums.length; i++) {
      let curr = nums[i];
      let x = target - curr;

      if(myMap.has(x)) {
        return [myMap.get(x), i]
      }

      myMap.set(curr, i)
    }

    return null;
}

twoSum(nums, target)