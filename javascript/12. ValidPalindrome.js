// two pointers
const isPalindrome = (s) => {
    s = s.replace(/[^0-9a-z]/gi,'').toLowerCase()
    let end = s.length-1
    let start = 0
    while(start <= end) {
        if(s[start] !== s[end]) return false
        else {
            start++
            end--
        }
    }
    return true
};
