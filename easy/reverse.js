/**
 * @param {number} x
 * @return {number}
 * @problem 反转整数
 */

var reverse = function reverse(x) {
    if(x > Math.pow(2,31) || x < -Math.pow(2,31)) return 0;
    let ans = 0;
    while(x != 0) {
        ans = ans*10 + x%10;
        x = parseInt(x/10);
    }
    if(ans > Math.pow(2,31) || ans < -Math.pow(2,31)) return 0;
    else return ans;
}
