/**
 * @param {string} s
 * @return {number}
 * @problem 罗马数字转整数
 */

// 通常情况下，罗马数字中小的数字在大的数字的右边。
// 如果小数在大数的左边，则大数-小数，否则，加上改数
// 从后面开始遍历，可以减少计算次数。
var romanToInt = function(s) {
    let map = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
        // 4(IV) = 5-1(V-I), 9(IX) = 10-1(X-I)
    let l = 0, r = 0;
    // l 存放右边的数字，r 存放最后的整数
    for(let i = s.length -1; i >= 0; i--){
    	r += (map[s[i]] >= l) ？ map[s[i]] : -map[s[i]];
    	l = map[s[i]]
    }
    return r;
};

var romanToInt = (s) => {
    let rM = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000};
    let l = 0, r = 0; 
    for(let i = s.length-1; i >= 0; i--) {
        r += (rM[s[i]] >= l) ? rM[s[i]] : -rM[s[i]];
        l = rM[s[i]];
    }
    return r;
};