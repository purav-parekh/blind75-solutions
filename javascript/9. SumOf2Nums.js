// 371. Sum of Two Integers

// Given two integers a and b, return the sum of the two integers without using the operators + and -.

// Link: https://leetcode.com/problems/sum-of-two-integers/

const sum = (a,b) => {
  let c = 0
  while(b!=0){
    c = a&b
    a ^= b
    b = c<<1
  }
  return a
}
