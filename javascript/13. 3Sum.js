// two pointers
// optimal

const threeSum = (nums,target=0) => {
  let res = []
  nums.sort((a,b)=>a-b)
  for(let i =0;i<nums.length-2;i++){
    if(i> 0 && nums[i]==nums[i-1]) {
      continue;
    }
    let [l,r] = [i+1,nums.length-1]
    let t = target-nums[i]
    while(l<r) {
    let sum = nums[l]+nums[r]
      if(sum === t) {
        res.push([nums[i],nums[l],nums[r]])
        while(l<r && nums[l]==nums[l+1]) l++
        while(l<r && nums[r]==nums[r-1]) r--
        l++
      } else if(sum > t) r--
      else l++
    }
  }
  return res
}
