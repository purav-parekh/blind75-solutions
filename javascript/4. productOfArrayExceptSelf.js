// 238. Product of Array Except Self

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.

// Link: https://leetcode.com/problems/product-of-array-except-self/description/

// Solution:

const product = nums => {
  let output = []
  let [l,r] = [1,1]
  for(let i=nums.length-1;i>-1;i--){
    o[i] = l
    l *= nums[i]
  }
  for(let i =0;i<nums.length;i++){
    o[i] *= r
    r *= nums[i]
  }
  return o
}
