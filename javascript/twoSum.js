// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Link: https://leetcode.com/problems/two-sum/

// Solution

const twoSum = (nums,target) => {
  let hash = {}
  for(let i =0;i<nums.length;i++){
    let t = target - nums[i];
    if(hash[t] === undefined) hash[nums[i]] = i
    else return [hash[t],i]
  }
  return []
}
