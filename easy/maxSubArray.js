/**
 * @param {number[]} nums
 * @return {number}
 * @description 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 */
var maxSubArray = function(nums) {
    let res = Number.NEGATIVE_INFINITY, curSum = 0;
    nums.forEach(num => {
    	curSum = Math.max(curSum + num, num);
    	res = Math.max(res, curSum)
    })
    return res
};