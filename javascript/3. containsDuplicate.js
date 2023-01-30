// 217. Contains Duplicate

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Link: https://leetcode.com/problems/contains-duplicate/

// Solution:

const containsDuplicate = nums => {
  let newSet = new Set(nums);
  return newSet.size !== nums.length;
}
