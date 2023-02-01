// 152. Maximum Product Subarray

// Given an integer array nums, find a subarray that has the largest product, and return the product.

// Link: https://leetcode.com/problems/maximum-product-subarray/

// Solution

const maxProduct = nums => {
  let [l,r] = [1,1]
  let n = nums.length
  let res = -Infinity
  for(let i =0;i<n;i++){
    l *= nums[i]
    r *= nums[n-1-i]
    res = Math.max(res,l,r)
    if(l==0) l = 1
    if(r==0) r = 1
  }
  return res
}
