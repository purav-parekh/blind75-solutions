// Leetcode Link = https://leetcode.com/problems/spiral-matrix/description/

const spiralOrder = (matrix) => {
  let [l,r] = [0,matrix[0].length-1]
  let [t,b] = [0,matrix.length-1]
  const res = []
  while(t<=b && l<=r) {
    // traverse top most row
    for(let i =l;i<=r;i++) {
      res.push(matrix[t][i])
    }
    t++ 
    // traverse right most column
    for(let i =t;i<=b;i++) {
      res.push(matrix[i][r])
    }
    r--
    // traverse bottom most row
    if(t<=b) {
      for(let i =r;i>=l;i--) {
        res.push(matrix[b][i])
      }
    b--
    }
    
    // traverse left most row
    if(l<=r) {
      for(let i =b;i>=t;i--){
        res.push(matrix[i][l])
      }
      l++
    }
  }
  return res
}
