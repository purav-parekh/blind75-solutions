// 53. Maximum Subarray

// Given an integer array nums, find the subarray with the largest sum, and return its sum.

// Link: https://leetcode.com/problems/maximum-subarray

// Soluttion:

const maxSubArray  = (arr) => {
  if(arr.length === 1) return arr
  let [sum,cumSum] = [0,-Infinity]
  for(let i =0;i<arr.length;i++){
    sum += arr[i]
    cumSum = Math.max(cumSum,sum)
    if(sum < 0) sum = 0
  }
  return cumSum
}
