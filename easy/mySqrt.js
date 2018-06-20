/**
 * @param {number} x
 * @return {number}
 * @describition 实现 int sqrt(int x) 函数。
 * 计算并返回 x 的平方根，其中 x 是非负整数。
 * 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。
 */
var mySqrt = function(x) {
    let res = 0, num = x;
    if(!x || x === 0){
        return res;
    }
    let left = 1, right = x;
    while(left <= right){
        let mid = left + Math.floor((right-left)/2);
        if (mid === x/mid){
            return mid;
        } else if(mid < x/mid){
            left = mid+1;
        } else {
            right = mid-1;
        }
    }
    return right;
};