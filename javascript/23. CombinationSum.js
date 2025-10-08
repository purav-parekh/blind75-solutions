// Use recursion - pick/not-pick
// Leectode Link - https://leetcode.com/problems/combination-sum/description/
// Time complexity - 2^t * K, where t = target because since an element can be picked more than once, the worst case is an elemnt being picked 'target' times.

const combination = (nums,target) => {
  let  ans = []

  const backtrack = (currIndex,arr,arrSum) => {
    if(currIndex === nums.length) {
      if(arrSum === target) {
        ans.push([...arr])
        return;
      }
      return;
    }
    if(arrSum>target) return;

    arr.push(nums[currIndex]) // pick
    backtrack(currIndex,arr,arrSum+nums[currIndex])
    arr.pop() // do not pick
    bacltrack(currIndex+1,arr,arrSum)
  }
  backtrack(0,[],0)
  return ans
}
