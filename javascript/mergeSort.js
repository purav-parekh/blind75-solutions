// Merge Sort
// The array, at each stage, is divided so as to reach a stage where it cannot be futher divided. Then the array is rebuilt by comparing the
// elements, placing them in the increasing order and merging the elements. This is recursively achieved. 
// concept of divide and merge
// find a mid, divide at that point, keep dividing until only 1 element is left, then come back up, and while merging, compare elements.

const mergeSort = (arr,low=0,high=arr.length-1) => {
  
  if(low >= high) return;
  
  let mid = Math.floor((low+high)/2)
  
  mergeSort(arr,low,mid)
  mergeSort(arr,mid+1,high)
  
  merge(arr,low,mid,high)
  return arr
}

const merge = (arr,low,mid,high) => {
  let temp = []
  let l = low
  let r = mid+1
  
  while(l<=mid && r<=high) {
    if(arr[l] <= arr[r]) {
      temp.push(arr[l])
      l++
    } else {
      temp.push(arr[r])
      r++
    }
  }
  while(l<=mid) {
    temp.push(arr[l])
    l++
  }
  while(r<=high) {
    temp.push(arr[r])
    r++
  }
  
  for(let i =low;i<=high;i++) {
    arr[i] = temp[i-low]
  }
}
