// 11. Container With Most Water

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Link: https://leetcode.com/problems/container-with-most-water/

const maxArea = height => {
  let [max,a] = [0,0]
  let [left,right] = [0,height.length-1]
  while(left<right){
      a = Math.min(height[left],height[right])*(right-left)
      max = Math.max(max,a)
      if(height[left] > height[right]) right--
      else left++
  }
  return max
};
