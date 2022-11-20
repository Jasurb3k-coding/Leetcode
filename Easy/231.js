/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n===1) return true
    while(n>=2){
        if (2 === n) return true
        n/=2
    }
    return false
};