// Rat in a maze
// Link - https://www.geeksforgeeks.org/problems/rat-in-a-maze-problem/1?page=1&category=Backtracking
// Recursion
// Input: maze[][] = [[1, 0, 0, 0], [1, 1, 0, 1], [1, 1, 0, 0], [0, 1, 1, 1]]
// Output: ["DDRDRR", "DRDDRR"]

const ratInMaze = (maze) => {
    let res = []
    let n = maze.length
    if(maze[n-1][n-1] !== 1) return []
    const visited = Array.from({length:n},() => new Array(n).fill(0))
    
    const bt = (i,j,temp) => {
        if(i == n-1 && j== n-1) {
            res.push(temp)
            return;
        }
        if (maze[i][j] !== 0) {
          if(visited[i][j] !== 1) {
              visited[i][j] = 1
              
              if(i-1 > -1) bt(i-1,j, temp + 'U') // up
              if(i+1 < n) bt(i+1,j, temp + 'D') // down
              if(j+1 < n) bt(i,j+1, temp + 'R') // right
              if(j-1 > -1) bt(i,j-1, temp + 'L') // left
              
              visited[i][j] = 0 // backtrack
          }
        }
    }
    bt(0,0,'')
    return res.sort((a,b) => a-b)
}
