/**
 * @param {number} x
 * @return {boolean}
 * @problem 判断一个整数是否是回文数
 */
// 通过反转整数
var isPalindrome = function(x) {
    if (x < 0) return false;
    let origin = x;
    let ans = 0;
    while(x != 0) {
        ans = ans*10 + x%10;
        x = parseInt(x/10);
    }
    return ans == origin ? true : false;
};

// 通过逐个字符串比较
var isPalindrome = function(x) {
    var xS = x.toString();
    if(xS.length == 1) {
        return true;
    }
    var i = xS.length - 1;
    var k = 0;
    while(i > k) {
         if(xS[i] != xS[k]){
            return false
        }
        i--;
        k++;
    }
    
    return true;
};

var isPalindrome = function(x) {
    let str = x.toString();
    if(str.length === 1) return true;
    let i = 0,j = str.length -1;
    while(i<j){
        if(str[i] !== str[j]) return false;
        i++;
        j--;
    }
    return true;
    
};
