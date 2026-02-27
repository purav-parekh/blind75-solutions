// 0/1 Knapsack

// recursion 
const knapsack = (values,weights,cap) => {
  const n = values.length

  const bt = (i,rem) => {
    if(rem === 0 || i===n) return 0
  
    let pick = values[i] + bt(i+1,rem-weights[i])
    let notPick = bt(i+1,rem)
  
    return Math.max(pick,notPick)
  }
  return bt(0,cap)
}

// memoization
const knapsack = (values,weights,cap) => {
  const n = values.length
  const dp = Array.from({length:n},() => new Array(cap+1).fill(-1))

  const bt = (i,rem) => {
    if(rem === 0 || i===n) return 0

    if(dp[i][rem] !== -1) return dp[i][rem]
    let pick = values[i] + bt(i+1,rem-weights[i])
    let notPick = bt(i+1,rem)
  
    return dp[i][rem] = Math.max(pick,notPick)
  }
  return bt(0,cap)
}

// tabulation
const knapsack = (values,weights,cap) => {
  const n = values.length
  const dp = Array.from({length:n},() => new Array(cap+1).fill(-1))

  for(let i =n-1;i>-1;i--) {
    for(let rem = 0;rem<=cap;rem++) {
      let notPick = dp[i+1][rem]
      let pick = 0
      if(rem >= weights[i]) pick = values[i] + dp[i+1][rem-weights[i]]

      dp[i][rem] = Math.max(pick,notPick)
    }
    return dp[0][cap]
  }
}
