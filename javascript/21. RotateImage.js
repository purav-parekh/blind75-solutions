// transpose (1st row becomes 1st column, 2nd row becomes 2nd column, etc) and reverse rows
// Leetcode Link: https://leetcode.com/problems/rotate-image/

const rotate = (matrix) => {
  const n = matrix.length
  for(let i =0;i<n;i++) {
    for(let j =i;j<n;j++) {
      // swap
      [matrix[i][j],matrix[j][i]] = [matrix[j][i],matrix[i][j]]
    }
  }
  //reverse
  for(let i =0;i<n;i++) {
    matrix[i] = matrix[i].reverse()
  }
}
