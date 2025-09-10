  // brute force & most intuitive
const topK = (nums) => {
  const freq = {}
  for(let i=0;i<nums.length;i++) {
    freq[nums[i]] = (freq[nums[i]] || 0) + 1
  }
  let ans = Object.entries(freq).sort((a,b) => b[1]-a[1])
  let res = []
  for(let i =0;i<k;i++) {
    res.push(+ans[i][0])
  }
  return res
}

// bucket sort (optimal)
const topK = (nums) => {
  const freq = {}
  for(let i=0;i<nums.length;i++) {
    freq[nums[i]] = (freq[nums[i]] || 0) + 1
  }
  let bucket = new Array(nums.length+1).fill().map(()=> [])
  for(num in freq) {
    bucket[freq[num]].push(+num)
  }
  let res = []
  for (let i = bucket.length - 1; i >= 0 && res.length < k; i--) {
        for (let num of bucket[i]) {
            res.push(num);
            if (res.length === k) return res;
        }
    }
  return res
}
